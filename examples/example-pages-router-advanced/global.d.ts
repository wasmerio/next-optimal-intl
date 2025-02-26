import en from './messages/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-optimal-intl`
  interface IntlMessages extends Messages {}
}
