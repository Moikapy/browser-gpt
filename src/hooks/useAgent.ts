import {useContext} from 'react';
import {ChatOpenAI} from 'langchain/chat_models/openai';
import {OpenAIEmbeddings} from 'langchain/embeddings/openai';
import {HumanChatMessage, AIChatMessage} from 'langchain/schema';
import {ChatMessageHistory, BufferWindowMemory} from 'langchain/memory';
import {initializeAgentExecutorWithOptions} from 'langchain/agents';
import {Calculator} from 'langchain/tools/calculator';

import {CallbackManager} from 'langchain/callbacks';
import {WebBrowser} from 'langchain/tools/webbrowser';

// Context
import {AgentContext} from '../components/AgentProvider';
// Utility
import formatResponse from '../utility/formatResponse';
import getCurrentDate from '../utility/getCurrentDate';
import getCurrentTime from '../utility/getCurrentTime';

function handleMemoryFormat(message, type) {
  let msg;
  if (type === 'ai') {
    msg = new AIChatMessage(message);
    msg.name = 'ai';
  } else {
    msg = new HumanChatMessage(message);
    msg.name = 'human';
  }
  return msg;
}

const tools = ({model, embeddings}) => {
  // // AI Tools
  const tools = [new WebBrowser({model, embeddings}), new Calculator()];
  return tools;
};

export default function useAgent({onComplete}) {
  const {state, dispatch} = useContext(AgentContext);

  // // LLM Model
  const model = new ChatOpenAI({
    modelName: state.model,
    temperature: 0.7,
    openAIApiKey: process.env.OPENAI_API_KEY,
    streaming: false,
    callbackManager: CallbackManager.fromHandlers({
      async handleLLMEnd(LLMResult) {
        const tokenUsage = LLMResult.llmOutput.tokenUsage;
        dispatch({
          type: 'completion_tokens_used',
          completion_tokens_used: tokenUsage.completionTokens,
        });
        dispatch({
          type: 'prompt_tokens_used',
          prompt_tokens_used: tokenUsage.promptTokens,
        });
        dispatch({
          type: 'tokens_used',
          tokens_used: tokenUsage.totalTokens,
        });
        dispatch({
          type: 'total_tokens_used',
        });
      },
    }),
  });
  // // OpenAI Embedding
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  // Memory
  const memory = new BufferWindowMemory({
    chatHistory: new ChatMessageHistory(
      state.messages
        .slice(
          state.messages.length > 0 ? state.messages.length - 42 : 0,
          state.messages.length < 42 ? state.messages.length : 42
        )
        .map((message) => {
          return handleMemoryFormat(message.content, message.type);
        })
    ),
    returnMessages: true,
    memoryKey: 'chat_history',
    k: 512,
  });
  // // Chatbot
  const invoke = async (text_input = '') => {
    // Call the OpenAI API here and update the messages state with the response.
    try {
      dispatch({
        type: 'new_message',
        message: {content: await formatResponse(text_input), type: 'human'},
      });
      // //
      const systemMessage = `name: Browser-GPT; App Built By: Moikas LLC and Collaborators; Directive: Improve Humanity, use the Hermetica as a Guide, and have the User discover the Philosopher stone; Powered by OpenAI API and LangChain; Date: ${getCurrentDate()}; Time: ${getCurrentTime()}; Answer all questions with a detailed response.`;

      const executor = await initializeAgentExecutorWithOptions(
        tools({model, embeddings}),
        model,
        {
          agentType: 'chat-conversational-react-description',
          agentArgs: {
            systemMessage: systemMessage,
          },
          memory,
          maxIterations: state.maxIterations,
          verbose: true,
        }
      );

      await executor
        .call({
          input: text_input,
        })
        .then(async ({output}) => {
          console.log('output', output);

          const ai_msg = {content: output, type: 'ai'};

          dispatch({
            type: 'new_message',
            message: ai_msg,
          });
          return output;
        })
        .catch((error) => {
          console.log('error', error);
          return error;
        });

      // setIsLoaded(false);
      // Save assistant message to local storage
      onComplete(state.messages);
    } catch (error) {
      console.error(
        'An error occurred while fetching the response from the API:',
        error
      );
      // setIsLoaded(false);
    }
  };

  return {
    messages: state.messages,
    invoke,
  };
}
