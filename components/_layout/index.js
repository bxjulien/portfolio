import { ImLinkedin } from 'react-icons/im';
import Link from 'next/link';
import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div id={styles.layout}>
      <Sidebar />

      <header>
        <div className={styles.header_content}>
          <div className={styles.texts}>
            <div className={styles.title}>
              <h1>Julien BX</h1>
              <Link
                href='https://www.linkedin.com/in/julien-berthoumieux/'
                target={'_blank'}
              >
                <ImLinkedin color='grey' size={25} />
              </Link>
            </div>

            <p>Développeur Web</p>
          </div>

          <img src={'/pp.jpg'} alt='Benoit Blanc' />
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
