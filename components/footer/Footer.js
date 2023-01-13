import styles from './Footer.module.scss';
import Image from 'next/image';
import { useLocaleContext } from '../../contexts/LocaleContext';

export default function Footer() {
  const { locale, handleChangeLocale } = useLocaleContext();

  return (
    <footer className={styles.footer}>

      {
        locale === 'FR'
          ?
          <Image src="/uk.png" alt="uk flag" width={25} height={25} onClick={() => handleChangeLocale('en')} style={{ cursor: 'pointer' }} />
          :
          <Image src="/fr.png" alt="fr flag" width={25} height={25} onClick={() => handleChangeLocale('fr')} style={{ cursor: 'pointer' }} />
      }

    </footer>
  )
}