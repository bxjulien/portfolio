import LocaleToggle from '../locale_toggle/LocaleToggle';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <LocaleToggle />

    </footer>
  )
}