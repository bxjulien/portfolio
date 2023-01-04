import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div id={styles.layout}>
      <header>
        <h1>Julien Berthoumieux</h1>
        <Sidebar />
      </header>

      <main>{children}</main>
    </div>
  );
}
