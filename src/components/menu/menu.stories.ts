import type { Meta, StoryObj } from '@storybook/web-components';
import { Header } from './header';


const meta: Meta = {
  title: 'Required Elements/Header',
  render: (args) => Header(args),
  args: {
    section1label: 'Sample Section 1',
    section1Link: 'https://stratcom.illinois.edu/',
    children1: 'Sample Child 1',
    children1Link: 'https://stratcom.illinois.edu/',
    section2label: 'Sample Section 2',
    section2Link: 'https://stratcom.illinois.edu/',
    children2: 'Sample Child 2',
    children2Link: 'https://stratcom.illinois.edu/',
    section3label: 'Sample Section 3',
    section3Link: 'https://stratcom.illinois.edu/',
    children3: 'Sample Child 3',
    children3Link: 'https://stratcom.illinois.edu/',
    section4label: 'Sample Section 4',
    section4Link: 'https://stratcom.illinois.edu/',
    children4: 'Sample Child 4',
    children4Link: 'https://stratcom.illinois.edu/',
    noLandingPages: false,
    MegaMenu: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const noLandingPages: Story = {
  args: {
    noLandingPages: true,
  },
};

export const MegaMenu: Story = {
  args: {
    MegaMenu: true,
  },
};
