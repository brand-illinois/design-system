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
}

export const Footer = ({
  primaryUnit,
  primaryUnitLink,
  siteName,
  siteNameLink,
  cta = true,
  ctaSlotName1,
  ctaSlotLink1,
  ctaSlotName2,
  ctaSlotLink2,
  ctaSlotName3,
  ctaSlotLink3,
}: FooterProps) => html`
  <ilw-footer id="example-footer--docs">
    <a href="${primaryUnitLink}" slot="primary-unit">
      ${primaryUnit}
    </a>

    <a href="${siteNameLink}" slot="site-name">
      ${siteName}
    </a>

    ${cta
      ? html`
          <div slot="actions" >
            
                <a href="${ctaSlotLink1}">${ctaSlotName1}</a>
              
                <a href="${ctaSlotLink2}">${ctaSlotName2}</a>
              
                <a href="${ctaSlotLink3}">${ctaSlotName3}</a>
      
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
 
    <div>
       <ilw-columns>
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
          </div>
          <div>
          </ilw-columns>
          <ilw-columns>
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
    </ilw-columns>
    </div>



  </ilw-footer>
`;