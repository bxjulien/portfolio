import styles from './Badge.module.scss';

export default function Badge({ className, children, variant }) {

  return (
    <code
      className={
        `${className ? className : ''} ${styles.badge} ${variant ? styles[variant] : styles.primary}`
      }
    >
      {children}
    </code>
  )
}