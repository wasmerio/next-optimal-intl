import {useTranslations} from 'next-optimal-intl';
import PageLayout from '../../components/PageLayout';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return <PageLayout title={t('title')} />;
}
