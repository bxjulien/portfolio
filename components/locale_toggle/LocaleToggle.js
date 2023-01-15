
import Image from 'next/image';
import useLocale from '../../hooks/useLocale';

export default function LocaleToggle() {
  const { locale, handleChangeLocale } = useLocale();

  if (locale === 'en') {
    return <Image src="/fr.png" alt="fr flag" width={20} height={20} onClick={() => handleChangeLocale('fr')} style={{ cursor: 'pointer' }} />
  }
  else return <Image src="/uk.png" alt="uk flag" width={20} height={20} onClick={() => handleChangeLocale('en')} style={{ cursor: 'pointer' }} />
}