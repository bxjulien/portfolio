import styles from './Card.module.scss';

export default function Card({ className, children, variant, style }) {
  return (
    <div
      className={`${className ? className : ''} ${styles.card} ${
        variant ? styles[variant] : ''
      }`}
      style={style}
    >
      {children}
    </div>
  );
}
