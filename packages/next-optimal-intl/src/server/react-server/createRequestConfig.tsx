import getRuntimeConfig from 'next-optimal-intl/config';
import type {GetRequestConfigParams, RequestConfig} from './getRequestConfig';

export default getRuntimeConfig as unknown as (
  params: GetRequestConfigParams
) => RequestConfig | Promise<RequestConfig>;
