import {createNavigation} from 'next-optimal-intl/navigation';
import {defineRouting} from 'next-optimal-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
