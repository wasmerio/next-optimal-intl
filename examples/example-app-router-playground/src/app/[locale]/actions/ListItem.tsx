import {useTranslations} from 'next-optimal-intl';

export default function ListItem({id}: {id: number}) {
  const t = useTranslations('ServerActions');
  return t('item', {id});
}
