import {useTranslations} from 'next-optimal-intl';
import PageLayout from '@/components/PageLayout';

export default function About() {
  const t = useTranslations('About');

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
    </PageLayout>
  );
}
