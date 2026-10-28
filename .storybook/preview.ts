import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  parameters: {
    docs: {
      toc: {
        headingSelector: 'h2, h3, h4',
        title: 'On this page',
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;