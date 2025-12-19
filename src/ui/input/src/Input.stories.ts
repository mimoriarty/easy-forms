import type { Meta, StoryObj } from '@storybook/html-vite';

import { expect, userEvent, within } from 'storybook/test';

import { createInput } from './Input';

const meta = {
  title: 'UI/Input',
  render: () => createInput(),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const LoggedOut: StoryObj = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('input', { name: /name/i });
    await expect(input).toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).not.toBeInTheDocument();
  },
};
