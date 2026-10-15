import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    backgroundColor: {
      control: {type: 'select'},
      options: ['--il-orange', '--il-blue', '--il-white'],
    },
    fillColor: {
      control: {type: 'select'},
      options: ['orange', 'blue'],
    },
    colorTheme: {
      control: { type: 'select' },
      options: ['outline', 'solid', 'inverse'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Orange Button',
    backgroundColor: '--il-white',
    fillColor: 'orange',
    colorTheme: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    backgroundColor: '--il-white',
    colorTheme: 'solid',
    fillColor: 'blue',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    backgroundColor: '--il-blue',
    fillColor: 'blue',
    colorTheme: 'inverse'
  },
};