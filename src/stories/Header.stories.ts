
import '@illinois-toolkit/ilw-header';
import type { Story } from '@storybook/web-components';



const meta = {
  title: 'Components/Required/Header',
  tags: ['autodocs'],
  render: (args) => Header(args),
  argTypes: {
    primaryUnit: {
      control: { type: 'text' },
    },
    primaryUnitLink: {
      control: { type: 'text' },
    },
    siteName: {
      control: { type: 'text' },
    },
    siteNameLink: {
      control: { type: 'text' },
    },
    search: {
      control: { type: 'boolean' },
    },
    utility: {
      control: { type: 'boolean' },
    },
    utilitySlotName1: {
      control: { type: 'text' },
    },
    utilitySlotLink1: {
      control: { type: 'text' },
    },
    utilitySlotName2: {
      control: { type: 'text' },
    },
    utilitySlotLink2: {
      control: { type: 'text' },
    },
    utilitySlotName3: {
      control: { type: 'text' },
    },
    utilitySlotLink3: {
      control: { type: 'text' },
    },
  },
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
} ;

export default meta;


export const Default: Story = {

  render: ({ primaryUnitLink, primaryUnit, siteNameLink, siteName, search, utility, utilitySlotName1, utilitySlotLink1, utilitySlotName2, utilitySlotLink2, utilitySlotName3, utilitySlotLink3 }: {
    primaryUnitLink: string;
    primaryUnit: string;
    siteNameLink: string;
    siteName: string;
    search: boolean;
    utility: boolean;
    utilitySlotName1: string;
    utilitySlotLink1: string;
    utilitySlotName2: string;
    utilitySlotLink2: string;
    utilitySlotName3: string;
    utilitySlotLink3: string;
  }) => `
     <ilw-header id="example-header--docs">
      <a href="${primaryUnitLink}" slot="primary-unit">
        ${primaryUnit}
      </a>

      <a href="${siteNameLink}" slot="site-name">
        ${siteName}
      </a>


      ${search ? `<form slot="search" method="get" action="/search" role="search">
        <input type="search" name="search" aria-labelledby="search-button">
        <button id="search-button" type="submit" aria-label="Search this site"></button>
      </form>` : ''}

      ${utility ? `<nav slot="links" aria-label="Utility">
        <ul>
          <li><a href="${utilitySlotLink1}">${utilitySlotName1}</a></li>
          <li><a href="${utilitySlotLink2}">${utilitySlotName2}</a></li>
          <li><a href="${utilitySlotLink3}">${utilitySlotName3}</a></li>
        </ul>
      </nav>` : ''}
    </ilw-header>
  `
};

export const Minimal: Story = {
   render: ({ primaryUnitLink, primaryUnit, siteNameLink, siteName }: {
    primaryUnitLink: string;
    primaryUnit: string;
    siteNameLink: string;
    siteName: string;
  }) => `
    <ilw-header>
      <a href="${primaryUnitLink}" slot="primary-unit">
        ${primaryUnit}
      </a>

      <a href="${siteNameLink}" slot="site-name">
        ${siteName}
      </a>
    </ilw-header>
  `,
};

export const WithUtilityLinks: Story = {
  render: () => `
    <ilw-header menu="" >
      <a href="https://example.edu/" slot="primary-unit">
        Sample Parent Unit
      </a>

      <a href="https://example.edu/" slot="site-name">
        Sample Site Name
      </a>

      <nav slot="links" aria-label="Utility">
        <ul>
          <li><a href="#">Apply</a></li>
          <li><a href="#">Visit</a></li>
          <li><a href="#">Give</a></li>
        </ul>
      </nav>
    </ilw-header>
  `,
};