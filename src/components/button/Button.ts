import { html } from 'lit';


import './button.css';



export interface ButtonProps {

  /** What background color to use */
  backgroundColor?: '--il-orange' | '--il-blue' | '--il-white';
  // the fill color of the button
  fillColor?: 'orange' | 'blue' ;
  /** What theme should the button be? */
  colorTheme?: 'outline' | 'solid' | 'inverse';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Button = ({ backgroundColor, fillColor, colorTheme, label, onClick }: ButtonProps) => {

  return html`
  <div style="background-color: var(${backgroundColor})">
    <button
      type="button"
      class=${['ilw-button', `ilw-theme-${fillColor}-${colorTheme}`].join(' ')}
      @click=${onClick}
    >
      ${label}
    </button>
  </div>
  `;
};
