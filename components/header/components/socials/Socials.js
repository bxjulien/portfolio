import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from 'react-icons/cg'
import { HiCursorClick } from 'react-icons/hi'
import styles from './Socials.module.scss';

export default function Socials({ onCV }) {
  return (
    <div className={styles.socials}>
      <Link
        href='https://www.linkedin.com/in/julien-berthoumieux'
        target={'_blank'}
        id={styles.linkedin}
      >
        <FaLinkedin size={20} color='grey' />
        {onCV &&
          <span className={styles.username}>julien-berthoumieux</span>
        }
      </Link>

      <Link
        href='https://github.com/bxjulien'
        target={'_blank'}
        id={styles.github}
      >
        <FaGithub size={20} color='grey' />
        {onCV &&
          <span className={styles.username}>bxjulien</span>
        }
      </Link>

      {
        onCV &&

        <Link
          href='https://bxjulien.com'
          target={'_blank'}
          id={styles.website}
        >
          <HiCursorClick size={20} color='grey' />
          {onCV &&
            <span className={styles.username}>bxjulien.com</span>
          }
        </Link>
      }
    </div>
  )
}