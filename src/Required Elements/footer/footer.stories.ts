import '@illinois-toolkit/ilw-footer';
import type { Story } from '@storybook/web-components';



const meta = {
  title: 'Required Elements/Footer',
  render: (args) => Footer(args),
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
    }
  },
  args: {
    primaryUnit: 'Sample Parent Unit',
    primaryUnitLink: 'https://stratcom.illinois.edu/',
    siteName: 'Sample Site Name',
    siteNameLink: 'https://brand.illinois.edu/',
  },
} ;

export default meta;


export const Default: Story = {

  render: ({ primaryUnitLink, primaryUnit, siteNameLink, siteName }: {
    primaryUnitLink: string;
    primaryUnit: string;
    siteNameLink: string;
    siteName: string;
  
  }) => `
 
 <ilw-footer>
    <p slot="primary-unit"><a href="${primaryUnitLink}">${primaryUnit}</a></p>

    <p slot="site-name"><a href="${siteNameLink}">${siteName}</a></p>
    
    <address slot="address">
      <p>5678 West Example Street<br>
        MC-0000<br>
        Champaign, IL 61820</p>
      <p>Email: <a href="mailto:address@example.com">address@example.com</a></p>
      <p>Phone: <a href="tel:+12175551234" aria-label="Example Site Office">(217) 555-1234</a></p>
    </address>
 <div slot="actions">
    <a href="#">Apply</a>
    <a href="#">Give</a>
  </div>
    <div>
       
					<nav class="ilw-footer-menu" aria-labelledby="menu-1">
					<h2 id="menu-1">Connect</h2>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Request More Info</a></li>
              <li><a href="#">Schedule a Visit</a></li>
              <li><a href="#">Directory</a></li>
            </ul>
					</nav>
          <nav class="ilw-footer-menu" aria-labelledby="menu-2">
					<h2 id="menu-2">Resources</h2>
            <ul>
              <li><a href="#">Faculty and Staff Resources</a></li>
              <li><a href="#">Current Students</a></li>
              <li><a href="#">Mental Health and Wellness</a></li>
              <li><a href="#">Canvas</a></li>
            </ul>
					</nav>
							
    </div>



</ilw-footer>

  `
};
