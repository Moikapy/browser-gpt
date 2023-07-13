// Form.stories.ts|tsx
import Chat from '.';
import AgentProvider from '../../AgentProvider';
const meta = {
  component: Chat,
};

export default meta;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
export const Default = {
  tags: ['autodocs'],
  args: {},
  render: (args) => (
    <AgentProvider>
      <Chat {...args} />
    </AgentProvider>
  ),
};
