import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['storybook-next-optimal-intl'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public']
};
export default config;
