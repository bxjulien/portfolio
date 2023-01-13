import styles from './Layout.module.scss';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import useTranslation from 'next-translate/useTranslation';

export default function Layout({ children }) {
  const { t } = useTranslation('common');

  return (
    <div id={styles.layout}>
      <Navbar t={t} />

      <Header t={t} />

      <main>{children}</main>

      <Footer t={t} />
    </div>
  );
}
