import AgentProvider from '../components/AgentProvider';
import Chat from '../components/chat';
import GlobalStyle from '../components/styles/global_style';

export default function Home() {
  return (
    <AgentProvider>
      <Chat />
      <GlobalStyle />
    </AgentProvider>
  );
}
