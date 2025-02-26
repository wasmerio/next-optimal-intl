import {cache} from 'react';
import {type useFormatter as useFormatterType} from '../../../use-optimal-intl/dist/types/src';
import {createFormatter} from '../../../use-optimal-intl/core';
import useConfig from './useConfig';

const createFormatterCached = cache(createFormatter);

export default function useFormatter(
  // eslint-disable-next-line no-empty-pattern
  ...[]: Parameters<typeof useFormatterType>
): ReturnType<typeof useFormatterType> {
  const config = useConfig('useFormatter');
  return createFormatterCached(config);
}
