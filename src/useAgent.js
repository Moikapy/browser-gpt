import {useState, useMemo} from 'react';
import {ChatOpenAI} from 'langchain/chat_models/openai';
import {OpenAIEmbeddings} from 'langchain/embeddings/openai';

import {ChatMessageHistory, BufferWindowMemory} from 'langchain/memory';
import {HumanChatMessage, AIChatMessage} from 'langchain/schema';
import {initializeAgentExecutorWithOptions} from 'langchain/agents';
import {Calculator} from 'langchain/tools/calculator';
import {CallbackManager} from 'langchain/callbacks';
import {WebBrowser} from 'langchain/tools/webbrowser';

export default function useAgent({onComplete}) {
  if (!process.env.OPENAI_API_KEY) return;
  const [messages, setMessages] = useState([]);
  const [_memory, setMemory] = useState([]);

  useMemo(() => {
    loadMessagesFromLocalStorage((storedMessages) => {
      setMessages(storedMessages);
    });
  }, []);
  // LLM Model
  const model = new ChatOpenAI({
    temperature: 0,
    cache: true,
    openAIApiKey: process.env.OPENAI_API_KEY,
    streaming: false,

    callbackManager: CallbackManager.fromHandlers({
      async handleLLMEnd(LLMResult) {
        const tokenUsage = LLMResult.llmOutput.tokenUsage;
        const data = LLMResult.text;
        setTokensUsed(tokenUsage.totalTokens);
        console.log(
          `Total Tokens Used: ${tokenUsage.totalTokens}, Completion Tokens: ${tokenUsage.completionTokens}, Prompt Tokens: ${tokenUsage.promptTokens}, text: ${LLMResult.text}`
        );
      },
    }),
  });
  // OpenAI Embedding
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  // AI Tools
  const tools = [new WebBrowser({model, embeddings}), new Calculator()];
  const memory = new BufferWindowMemory({
    chatHistory: new ChatMessageHistory(_memory),
    returnMessages: true,
    llm: model,
    memoryKey: 'chat_history',
    k: 100,
  });

  const invoke = async (text_input) => {
    // Format the chatbot's response
    const formattedResponse = text_input; //formatResponse();
    // Save user message to memory
    setMemory((prevMemory) => {
      let msg = new HumanChatMessage(formattedResponse);
      msg.name = 'human';
      return prevMemory.length > 0 ? [...prevMemory, msg] : [msg];
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      {content: formattedResponse, sender: 'human'},
    ]);
    // setTextInput('');

    // Call the OpenAI API here and update the messages state with the response.
    try {
      const date = new Date();
      const options = {month: 'short', day: '2-digit', year: 'numeric'};
      const formattedDate = date.toLocaleDateString('en-US', options);
      const systemMessage = `I am Pakira. Mission: Progress Humanity, Gain Further Understanding of the Universe, Follow the Law. Current Date: ${formattedDate}; Current Time: ${new Date().toLocaleString(
        'en-US',
        {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone: 'America/New_York',
        }
      )}; Current Website: ${tab_link}`;

      const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: 'chat-conversational-react-description',
        agentArgs: {
          systemMessage: systemMessage,
        },
        memory,
        maxIterations: 8,
        verbose: true,
        async handleChainEnd(ChainResult) {
          // const tokenUsage = LLMResult.llmOutput.tokenUsage;
          console.log(`Text: ${ChainResult}`);
        },
      });

      await executor
        .call({
          input: formattedResponse,
        })
        .then(async (response) => {
          const data = await response['output'];
          console.log('data', data, response);
          // setTokensUsed(tokenUsage.totalTokens);

          setMessages((prevMessages) => [
            ...prevMessages,
            {content: data, sender: 'ai'},
          ]);
          // Save assistant message to memory
          setMemory((prevMemory) => {
            console.log(new AIChatMessage(data, 'ai'));
            let msg = new AIChatMessage(data, 'ai');
            msg.name = 'ai';

            return prevMemory.length > 0 ? [...prevMemory, msg] : [msg];
          });
          // Save assistant message to local storage
        })
        .catch((error) => {
          console.log('error', error);
        });

      setIsLoaded(false);
    } catch (error) {
      console.error(
        'An error occurred while fetching the response from the API:',
        error
      );
      // setIsLoaded(false);
    }
    onComplete('complete');
  };
 
  return {
    messages,
    invoke,
  };
}

function formatResponse(text) {
  if (!text || typeof text !== 'string') return;
  // ... (copy the wrapCodeBlocks function implementation from the previous response)
  function wrapCodeBlocks(text) {
    const codePattern =
      /((?:[a-zA-Z0-9_$]+\s*\(.*\)\s*\{[\s\S]*?\})|(?:[a-zA-Z0-9_]+\s*=\s*function\s*\(.*\)\s*\{[\s\S]*?\}))/g;
    const mathPattern = /((?:[a-zA-Z]+\s*=.*\n)|(?:[a-zA-Z]+\(.*\) = .*\n))/g;

    const wrappedCode = text.replace(codePattern, (match) => {
      return '\n' + match + '\n';
    });

    const wrappedMath = wrappedCode.replace(mathPattern, (match) => {
      return '\n' + match + '\n';
    });

    return wrappedMath;
  }
  return wrapCodeBlocks(text);
}

const loadMessagesFromLocalStorage = (callback = () => {}) => {
  if (typeof localStorage === 'undefined') return;
  //
  const storedMessages = localStorage.getItem('chatMessages');
  if (storedMessages) {
    if (typeof storedMessages === 'string' && storedMessages.length > 0) {
      console.log(
        'Loading messages from local storage'
        //typeof JSON.parse(storedMessages)
      );
      callback(
        typeof JSON.parse(storedMessages) === 'object'
          ? JSON.parse(storedMessages)
          : storedMessages
      );
    }
  }
};
