import styles from './Header.module.scss';
import Title from "./components/title/Title";
import PP from "./components/pp/PP";
import Socials from './components/socials/Socials';

export default function Header({ t, onCV = false }) {
  return (
    <header id={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.texts}>
          <Title onCV={onCV} />

          <div className={styles.sub}>
            <h2 style={{ padding: onCV ? 0 : null }}>
              {t('web_dev')}
            </h2>

            <Socials onCV={onCV} />
          </div>
        </div>

        <PP onCV={onCV} />
      </div>
    </header>
  )
}