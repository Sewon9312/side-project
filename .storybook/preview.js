/** @type { import('@storybook/react').Preview } */
import './global.css';

const preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['overview', ['introdution'], 'design', 'layout', [], 'components', []],

      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'light',
          value: '#F0F0F0',
        },
        {
          name: 'dark',
          value: '#0d141c',
        },
      ],
    },
    codeBgColor: 'dark',
  },
};

export default preview;
