import useVisible from 'hooks/useVisible';
import styles from './Title.module.scss';

export default function Title({
  className,
  id,
  children,
  variant,
  tag,
  subtitle,
}) {
  const [ref, isVisible] = useVisible();

  return (
    <div
      className={`${className ? className : ''} ${styles.title} ${variant ? styles[variant] : ''
        }`}
      id={id || ''}
    >
      <div className={styles.title_inner}>
        <Tag tag={tag} children={children} />
      </div>
      {subtitle && <span className={`${styles.title_subtitle} ${isVisible ? styles.visible : ''}`} ref={ref}>{subtitle}</span>}
    </div>
  );
}

const Tag = ({ tag, children }) => {
  if (tag === 'h1') {
    return (
      <h1 className={styles.title_text} data-title={children}>
        {children}
      </h1>
    );
  }
  if (tag === 'h2') {
    return (
      <h2 className={styles.title_text} data-title={children}>
        {children}
      </h2>
    );
  }
  if (tag === 'h3') {
    return (
      <h3 className={styles.title_text} data-title={children}>
        {children}
      </h3>
    );
  }
};
