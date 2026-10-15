import { html } from 'lit';


export interface FooterProps {

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
export const Footer = ({ backgroundColor, colorTheme, label, onClick }: FooterProps) => {

  return html`
     <ilw-footer id="example-footer--docs">
   
    </ilw-footer>
  `;
};