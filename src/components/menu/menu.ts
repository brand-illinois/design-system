import { html } from 'lit';
import '@illinois-toolkit/ilw-header-menu';

export interface HeaderMenuProps {
  section1label?: string;
  section1Link?: string;
  children1?: string;
  children1Link?: string;
  section2label?: string;
  section2Link?: string;
  children2?: string;
  children2Link?: string;
  section3label?: string;
  section3Link?: string; 
  children3?: string;
  children3Link?: string;
  section4label?: string;
  section4Link?: string;
  children4?: string;
  children4Link?: string;
  noLandingPages?: boolean;
  MegaMenu?: boolean;
}

export const HeaderMenu = ({
 
}: HeaderMenuProps) => html`
  
`;