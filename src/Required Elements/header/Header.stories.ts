import type { Meta, StoryObj } from '@storybook/web-components';
import { Header } from './header';


const meta: Meta = {
  title: 'Required Elements/Header',
  render: (args) => Header(args),
  args: {
    primaryUnit: 'Sample Parent Unit',
    primaryUnitLink: 'https://stratcom.illinois.edu/',
    siteName: 'Sample Site Name',
    siteNameLink: 'https://brand.illinois.edu/',
    search: true,
    utility: true,
    utilitySlotName1: 'Apply',
    utilitySlotLink1: '/apply',
    utilitySlotName2: 'Visit',
    utilitySlotLink2: '/visit',
    utilitySlotName3: 'Give',
    utilitySlotLink3: '/give',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    search: false,
    utility: false,
  },
};

export const WithUtilityLinks: Story = {
  args: {
    utility: true,
  },
};
