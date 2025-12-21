import type { Meta, StoryObj } from '@storybook/html-vite';

import { expect, userEvent, within } from 'storybook/test';

import type { InputProps } from './Input';
import { Input } from './Input';

const meta = {
  title: 'UI/Input',
  render: (args: InputProps) => new Input(args).render(),
  args: {
    placeholder: 'Placeholder',
    style: {
      fontSize: '2rem',
      fontFamily: 'Arial',
    },
    classes: 'light'
  }
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('input', { name: /name/i });
    await expect(input).toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).not.toBeInTheDocument();
  },
};
