import type {useTranslations as useTranslationsType} from 'use-optimal-intl/dist/types/src';
import getBaseTranslator from './getTranslator';
import useConfig from './useConfig';

export default function useTranslations(
  ...[namespace]: Parameters<typeof useTranslationsType>
): ReturnType<typeof useTranslationsType> {
  const config = useConfig('useTranslations');
  return getBaseTranslator(config, namespace);
}
