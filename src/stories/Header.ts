import { html } from 'lit';

import './colors.css';
import './button.css';



export interface ButtonProps {

  /** What background color to use */
  backgroundColor?: 'orange' | 'blue' ;
  /** What theme should the button be? */
  colorTheme?: 'outline' | 'solid' | 'inverse';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Button = ({ backgroundColor, colorTheme, label, onClick }: ButtonProps) => {

  return html`
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
  `;
};