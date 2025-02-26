import {getRequestConfig} from 'next-optimal-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
