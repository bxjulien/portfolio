import styles from './Layout.module.scss';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';

export default function Layout({ children }) {
  return (
    <div id={styles.layout}>
      <Navbar />

      <Header />

      <main>{children}</main>
    </div>
  );
}
