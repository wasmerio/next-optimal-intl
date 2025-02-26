import {useTranslations} from 'next-optimal-intl';
import {setRequestLocale} from 'next-optimal-intl/server';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function PathnamesPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('PathnamesPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
}
