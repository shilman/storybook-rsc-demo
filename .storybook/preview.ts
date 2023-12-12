import type { Preview } from '@storybook/react';
import { initialize } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
