import AgentProvider from '@/components/AgentProvider';
import Chat from '@/components/chat';

export default function Home() {
  return (
    <AgentProvider>
      <Chat />
    </AgentProvider>
  );
}
