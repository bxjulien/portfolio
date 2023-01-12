import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.texts}>
          <div className={styles.title}>
            <h1>
              Julien <br /> Berthoumieux
            </h1>
          </div>

          <div className={styles.sub}>
            <h2>
              Développeur Web
            </h2>

            <div className={styles.socials}>
              <Link
                href='https://www.linkedin.com/in/julien-berthoumieux'
                target={'_blank'}
                id={styles.linkedin}
              >
                <FaLinkedin size={20} color='grey' />
              </Link>

              <Link
                href='https://github.com/bxjulien'
                target={'_blank'}
                id={styles.github}
              >
                <FaGithub size={20} color='grey' />
              </Link>
            </div>
          </div>
        </div>

        <div id={styles.pp}>
          <img src={'/pp.jpg'} alt='profile picture' />
        </div>
      </div>


    </header>
  )
}