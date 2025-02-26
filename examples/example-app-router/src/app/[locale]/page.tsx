import {useTranslations} from 'next-optimal-intl';
import {setRequestLocale} from 'next-optimal-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </p>
    </PageLayout>
  );
}
