// Form.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import Select from '.';
const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
export const Default: Story = {
  tags: ['autodocs'],
  args: {
    options: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
    ]
  },
};
