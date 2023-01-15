import LocaleToggle from '../locale_toggle/LocaleToggle';
import styles from './Navbar.module.scss';

export default function Navbar({ t }) {
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
          <LocaleToggle />
        </li>
      </ul>
    </nav>
  );
}
