import { join, dirname } from 'path';
export default {
  stories: ['../src/pages/**/*.stories.mdx', '../src/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react-vite',
  core: { builder: '@storybook/builder-vite' },
  viteFinal: async (config) => {
    config.resolve.alias = { ...config.resolve.alias, '@ignite-ui/tokens': join(dirname(require.resolve('@ignite-ui/tokens')), '..') };
    return config;
  },
};
