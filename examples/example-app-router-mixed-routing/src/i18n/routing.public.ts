import {createNavigation} from 'next-optimal-intl/navigation';
import {defineRouting} from 'next-optimal-intl/routing';
import {defaultLocale, locales} from '../config';

export const routing = defineRouting({
  locales,
  defaultLocale
});

// Should only be used on public routes in the `[locale]` segment
export const {Link, usePathname} = createNavigation(routing);
