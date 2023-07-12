// Form.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';

import Form from './';
import Textarea from '../TextArea';
const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
export const Default: Story = {
  args: {
    className: 'input-form',
    onSubmit: (e) => {alert('Form Submitted')},
  },
};
