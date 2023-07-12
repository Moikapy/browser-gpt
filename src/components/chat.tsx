import {useState, useMemo, useReducer, useContext} from 'react';
//Our components
import Container from './container';
import Chat_Navbar from './chat_navbar';
import Chat_Message_Log from './chat_message_log';
import Form from './common/Form/';
//
import Textarea from './common/TextArea';
import useAgent from '../hooks/useAgent';
// Context
import {AgentContext} from './AgentProvider';

const Chat = () => {
  const {state, dispatch} = useContext(AgentContext);

  const [isLoaded, setIsLoaded] = useState(false);

  const {messages, invoke} = useAgent({
    onComplete: async (data) => {
      setIsLoaded(false);
      dispatch({type: 'user_input', user_input: ''});
    },
  });

  async function getCurrentTabUrl() {
    if (chrome && chrome.tabs) {
      const tabs = await chrome?.tabs?.query({active: true});
      return await tabs[0].url;
    }
  }

  useMemo(() => {
    if (typeof chrome !== 'undefined') {
      getCurrentTabUrl().then((url) => {
        dispatch({type: 'active_tab', active_tab: url});
        return url;
      });
    }
  }, [dispatch]);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsLoaded(true);
      invoke(state.user_input);
    }
  };
  //
  return (
    <Container $flex>
      <Chat_Navbar />
      <Chat_Message_Log messages={messages} />
      <Form
        className='input-form'
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoaded(true);
          invoke(state.user_input);
        }}>
        {!isLoaded ? (
          <Textarea
            value={state.user_input}
            onChange={(e) =>
              dispatch({type: 'user_input', user_input: e.target.value})
            }
            onKeyDown={handleKeyDown}
            placeholder='Type your message and press enter...'
          />
        ) : (
          <span>Processing...</span>
        )}
      </Form>
    </Container>
  );
};

export default Chat;
