import {useState, useContext} from 'react';
import Chat_Message_Log from '../Message_Log';
import Form from '../../common/Form';
import Divider from '../../common/Divider';
import Textarea from '../../common/TextArea';
//
import useAgent from '../../../hooks/useAgent';
import { useCurrentTab } from '../../../hooks/useCurrentTab';
// Context
import {AgentContext} from '../../AgentProvider';

const Chat = () => {
  const {state, dispatch} = useContext(AgentContext);

  const [isLoaded, setIsLoaded] = useState(false);

  const {messages, invoke} = useAgent({
    onComplete: async (data) => {
      setIsLoaded(false);
      dispatch({type: 'user_input', user_input: ''});
    },
  });

  useCurrentTab({
    onComplete: (url) => {
      console.log('url', url);
      dispatch({type: 'active_tab', active_tab: url});
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsLoaded(true);
      invoke(state.user_input);
    }
  };
  //
  return (
    <>
      <Divider />
      <Chat_Message_Log messages={messages} />
      <Divider />
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
    </>
  );
};

export default Chat;
