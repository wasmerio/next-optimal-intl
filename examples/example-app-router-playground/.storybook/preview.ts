import type {Preview} from '@storybook/react';
import nextIntl from './next-optimal-intl';

const preview: Preview = {
  initialGlobals: {
    locale: 'en',
    locales: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ja: '日本語'
    }
  },
  parameters: {
    nextIntl
  }
};

export default preview;
