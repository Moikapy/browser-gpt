import {useState} from 'react';
import AgentProvider from '../components/AgentProvider';
import Chat from '../components/ui/chat';
import Settings from '../components/ui/settings';
import Chat_Navbar from '../components/chat_navbar';
import Container from '../components/common/Container';
import GlobalStyle from '../components/styles/global_style';

export default function Page() {
  const [isSettings, setIsSettings] = useState(false);
  return (
    <AgentProvider>
      <Container $flex>
        <Chat_Navbar
          onClick={() => {
            setIsSettings(!isSettings);
          }}
        />
        {!isSettings ? <Chat /> : <Settings />}
      </Container>
      <GlobalStyle />
    </AgentProvider>
  );
}
