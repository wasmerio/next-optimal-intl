import {useTranslations} from 'next-optimal-intl';
import {setRequestLocale} from 'next-optimal-intl/server';
import PageTitle from '@/components/PageTitle';

type Props = {
  params: {locale: string};
};

export default function Index({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('Index');
  return <PageTitle>{t('title')}</PageTitle>;
}
