import {useState, useMemo} from 'react';
//Our components
import Container from './container';
import Chat_Navbar from './chat_navbar';
import Chat_Message_Log from './chat_message_log';
import Chat_Message_Form from './chat_message_form';
import useAgent from '@/useAgent';
const Chat = () => {
  // const {messages, invoke} = useAgent({
  //   onComplete: (data) => {
  //     console.log('onComplete', data);
  //   }
  // });
  const [tab_link, setTabLink] = useState('');
  const [text_input, setTextInput] = useState('');
  const [tokens_used, setTokensUsed] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useMemo(() => {
    if (typeof chrome !== 'undefined') {
      // console.log('chrome is defined', chrome);
      async function getCurrentTabUrl() {
        if (chrome && chrome.tabs) {
          const tabs = await chrome?.tabs?.query({active: true});
          return await tabs[0].url;
        }
      }
      getCurrentTabUrl().then((url) => {
        setTabLink(url);
        return url;
      });
    }
  }, []);

  //
  return (
    <Container>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        html,
        body,
        #__next,
        main {
          height: 600px;
          width: 500px;
          margin: 0px !important;
          font-family: 'Noto Serif', serif;
          overflow: hidden;
        }
      `}</style>
      <Chat_Navbar />
      <Chat_Message_Log messges={[]} />
      <Chat_Message_Form
        defaultValue={text_input}
        loading={isLoaded}
        onSubmit={(e) => {}}
        onChange={(e) => setTextInput(e.target.value)}
      />
      
    </Container>
  );
};

export default Chat;
