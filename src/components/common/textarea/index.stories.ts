// TextArea.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import TextArea from './';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
let value = '';
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
    value: value,
    onChange: (e) => {
      value = e.target.value;
    },
    onKeyDown: () => {},
  },
};
