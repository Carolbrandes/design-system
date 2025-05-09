import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    // Add the base path for production
    if (configType === 'PRODUCTION') {
      config.base = "design-system";
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@ignite-ui/react': path.resolve(__dirname, '../../react/src'),
          // Add this if you're using any other internal packages
          '@': path.resolve(__dirname, '../src'),
        },
        preserveSymlinks: true, // Crucial for monorepos
      },
      optimizeDeps: {
        include: ['@ignite-ui/react'], // Force include your package
      },
    });
  }
};

export default config;

