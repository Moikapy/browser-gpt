// Form.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import Container from '.';
const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
export const Default: Story = {
  args: {
    children: 'Container',
  },
};
