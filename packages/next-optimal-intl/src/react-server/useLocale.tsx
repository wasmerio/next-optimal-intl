import type {useLocale as useLocaleType} from 'use-optimal-intl/dist/types/src';
import useConfig from './useConfig';

export default function useLocale(
  // eslint-disable-next-line no-empty-pattern
  ...[]: Parameters<typeof useLocaleType>
): ReturnType<typeof useLocaleType> {
  const config = useConfig('useLocale');
  return config.locale;
}
