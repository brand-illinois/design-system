import type { Meta, StoryObj } from '@storybook/web-components';
import { Footer } from './footer';



const meta: Meta = {
  title: 'Required Elements/Footer',
  render: (args) => Footer(args),
  args: {
    primaryUnit: 'Sample Parent Unit',
    primaryUnitLink: 'https://stratcom.illinois.edu/',
    siteName: 'Sample Site Name',
    siteNameLink: 'https://brand.illinois.edu/',
    search: true,
    cta: true,
    ctaSlotName1: 'Apply',
    ctaSlotLink1: '/apply',
    ctaSlotName2: 'Visit',
    ctaSlotLink2: '/visit',
    ctaSlotName3: 'Give',
    ctaSlotLink3: '/give',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};



