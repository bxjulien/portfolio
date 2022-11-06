import styles from './Card.module.scss';

export default function Card({ className, children, variant }) {

  return (
    <div
      className={
        `${className ? className : ''} ${styles.card} ${variant ? styles[variant] : ''}`
      }
    >
      {children}
    </div>
  )
}