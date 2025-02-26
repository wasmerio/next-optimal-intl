'use client';

import {useTranslations} from 'next-optimal-intl';
import PageLayout from '@/components/PageLayout';

export default function Secret() {
  const t = useTranslations('Secret');

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
    </PageLayout>
  );
}
