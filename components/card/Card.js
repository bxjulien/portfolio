import useVisible from 'hooks/useVisible';
import styles from './Card.module.scss';

export default function Card({ className, children, variant, style }) {
  const [ref, isVisible] = useVisible();
  return (
    <div
      className={`${className ? className : ''} ${styles.card} ${variant ? styles[variant] : ''} ${isVisible ? styles.visible : ''}`}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  );
}
