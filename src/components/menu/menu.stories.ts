import type { Meta, StoryObj } from '@storybook/web-components';
import { Menu } from './menu';


const meta: Meta = {
  title: 'Required Elements/Menu',
  render: (args) => Menu(args),
  args: {
   
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};


