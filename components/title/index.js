import { useEffect } from 'react';
import styles from './Title.module.scss';

export default function Title({ className, children, variant, tag, subtitle }) {

  return (
    <div
      className={
        `${className ? className : ''} ${styles.title} ${variant ? styles[variant] : ''}`
      }
    >
      <div className={styles.title_inner}>
        <Tag tag={tag} children={children} />
      </div>
      {subtitle && <span className={styles.title_subtitle}>{subtitle}</span>}
    </div>
  )
}

const Tag = ({ tag, children }) => {
  if (tag === 'h1') {
    return <h1 className={styles.title_text} data-title={children}>{children}</h1>
  }
  if (tag === 'h2') {
    return <h2 className={styles.title_text} data-title={children}>{children}</h2>
  }
  if (tag === 'h3') {
    return <h3 className={styles.title_text} data-title={children}>{children}</h3>
  }
}