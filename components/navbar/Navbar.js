import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useLocaleContext } from '../../contexts/LocaleContext';

export default function Navbar({ t }) {
  const { locale, handleChangeLocale } = useLocaleContext();

  return (
    <nav id={styles.navbar}>
      <ul>
        <li>
          <a href='#works'>{t('works')}</a>
        </li>
        <li>
          <a href='#studies'>{t('studies')}</a>
        </li>
        <li>
          <a href='#testimonials'>{t('testimonials')}</a>
        </li>
        <li>
          <a href='#contact'>{t('contact')}</a>
        </li>
        <li>
          {
            locale === 'FR'
              ?
              <Image src="/uk.png" alt="uk flag" width={20} height={20} onClick={() => handleChangeLocale('en')} style={{ cursor: 'pointer' }} />
              :
              <Image src="/fr.png" alt="fr flag" width={20} height={20} onClick={() => handleChangeLocale('fr')} style={{ cursor: 'pointer' }} />
          }
        </li>
      </ul>
    </nav>
  );
}
