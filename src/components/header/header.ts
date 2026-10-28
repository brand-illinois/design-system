import { html } from 'lit';
import '@illinois-toolkit/ilw-header';

export interface HeaderProps {
  primaryUnit: string;
  primaryUnitLink: string;
  siteName: string;
  siteNameLink: string;
  search?: boolean;
  utility?: boolean;
  utilitySlotName1?: string;
  utilitySlotLink1?: string;
  utilitySlotName2?: string;
  utilitySlotLink2?: string;
  utilitySlotName3?: string;
  utilitySlotLink3?: string;
}

export const Header = ({
  primaryUnit,
  primaryUnitLink,
  siteName,
  siteNameLink,
  search = true,
  utility = true,
  utilitySlotName1,
  utilitySlotLink1,
  utilitySlotName2,
  utilitySlotLink2,
  utilitySlotName3,
  utilitySlotLink3,
}: HeaderProps) => html`
  <ilw-header id="example-header--docs">
    <a href="${primaryUnitLink}" slot="primary-unit">
      ${primaryUnit}
    </a>

    <a href="${siteNameLink}" slot="site-name">
      ${siteName}
    </a>

    ${search
      ? html`
          <form slot="search" method="get" action="/search" role="search">
            <input
              type="search"
              name="search"
              aria-labelledby="search-button"
            />
            <button
              id="search-button"
              type="submit"
              aria-label="Search this site"
            ></button>
          </form>
        `
      : null}

    ${utility
      ? html`
          <nav slot="links" aria-label="Utility">
            <ul>
              <li>
                <a href="${utilitySlotLink1}">${utilitySlotName1}</a>
              </li>
              <li>
                <a href="${utilitySlotLink2}">${utilitySlotName2}</a>
              </li>
              <li>
                <a href="${utilitySlotLink3}">${utilitySlotName3}</a>
              </li>
            </ul>
          </nav>
        `
      : null}
  </ilw-header>
`;