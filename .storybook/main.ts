import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { actions: false, controls: false } },
    'msw-storybook-addon',
    'storybook-addon-module-mock',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalNextRSC: true,
  },
};
export default config;
