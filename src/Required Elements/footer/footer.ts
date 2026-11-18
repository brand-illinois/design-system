import { html } from 'lit';
import '@illinois-toolkit/ilw-footer';



export interface FooterProps {
  primaryUnit: string;
  primaryUnitLink: string;
  siteName: string;
  siteNameLink: string;
  cta?: boolean;
  ctaSlotName1?: string;
  ctaSlotLink1?: string;
  ctaSlotName2?: string;
  ctaSlotLink2?: string;
  ctaSlotName3?: string;
  ctaSlotLink3?: string;
  partnerLogo: boolean;
  partnerLogoURL: string;
}

export const Footer = ({
  primaryUnit,
  primaryUnitLink,
  siteName,
  siteNameLink,
  cta1 = true,
  cta2 = true,
  cta3 = true,
  ctaSlotName1,
  ctaSlotLink1,
  ctaSlotName2,
  ctaSlotLink2,
  ctaSlotName3,
  ctaSlotLink3,
  column1 = true,
  column2 = true,
  column3 = true,
  column4 = true,
}: FooterProps) => html`
  <ilw-footer id="example-footer--docs">
   

    <a href="${siteNameLink}" slot="site-name">
      ${siteName}
    </a>

    ${cta1 || cta2 || cta3
      ? html`
          <div slot="actions" >
            ${cta1 ? html`<a href="${ctaSlotLink1}">${ctaSlotName1}</a>` : null}
            ${cta2 ? html`<a href="${ctaSlotLink2}">${ctaSlotName2}</a>` : null}
            ${cta3 ? html`<a href="${ctaSlotLink3}">${ctaSlotName3}</a>` : null}
      
          </div>
        `
      : null}


  
    
    <address slot="address">
      <p>5678 West Example Street<br>
        MC-0000<br>
        Champaign, IL 61820</p>
      <p>Email: <a href="mailto:address@example.com">address@example.com</a></p>
      <p>Phone: <a href="tel:+12175551234" aria-label="Example Site Office">217-555-1234</a></p>
    </address>
 
 <a href="${primaryUnitLink}" slot="primary-unit">
      ${primaryUnit}
    </a>

       <div class="ilw-columns ">
    ${column1 ? html`
       <div>
					<nav class="ilw-footer-menu" aria-labelledby="menu-1">
					<h2 id="menu-1">Connect</h2>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Request More Info</a></li>
              <li><a href="#">Directory</a></li>
            </ul>
					</nav>
          </div>
          ` : null}
          ${column2 ? html`
          <div>
          <nav class="ilw-footer-menu" aria-labelledby="menu-2">
					<h2 id="menu-2">Explore</h2>
            <ul>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Employment Opportunities</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Centers and Initatives</a></li>
            </ul>
					</nav>
          </div>
          ` : null}
        </div>
        <div class="ilw-columns">
    ${column3 ? html`
       <div>
					<div class="ilw-footer-menu">
					<h2>Land Acknowledgement</h2>
            <p>As a land-grant institution, the University of Illinois Urbana-Champaign has a responsibility to acknowledge the historical context in which it exists. In order to remind ourselves and our community, we will begin this event with the following statement. The University of Illinois Urbana-Champaign sits on the lands of the Peoria, Kaskaskia, Piankashaw, Wea, Miami, Mascoutin, Odawa, Sauk, Mesquaki, Kickapoo, Potawatomi, Ojibwe, and Chickasaw Nations. It is necessary for us to acknowledge these Native Nations and for us to work with them as we move forward as an institution. Over the next 150 years, we will be a vibrant community inclusive of all our differences, with Native peoples at the core of our efforts.</p>
					</div>
        </div>
          ` : null}
          ${column4 ? html`
       <div>
					<div class="ilw-footer-menu">
					<h2>Additional Info</h2>
            <p>Sign up for our newsletter to stay updated.</p>
					</div>
        </div>
          ` : null}
        </div>
         
  


  </ilw-footer>
`;