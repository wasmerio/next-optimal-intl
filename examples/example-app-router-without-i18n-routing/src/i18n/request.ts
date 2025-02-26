import {getRequestConfig} from 'next-optimal-intl/server';
import {getUserLocale} from '../services/locale';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
