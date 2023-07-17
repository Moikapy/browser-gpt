// Form.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import Range from '.';
const meta: Meta<typeof Range> = {
  component: Range,
};

export default meta;
type Story = StoryObj<typeof Range>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
export const Default: Story = {
  tags: ['autodocs'],
  args: {
    label: 'Range',
    className: '',
    onChange: (e) => {
      console.log(e);
    },
    min: 0,
    max: 100,
    value: 0,
  },
};
export const Half_Range: Story = {
  ...Default,
  args: {
    ...Default.args,
    value: 50,
  },
};
export const Full_Range: Story = {
  ...Default,
  args: {
    ...Default.args,
    value: 100,
  },
};