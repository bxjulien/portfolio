import useVisible from "hooks/useVisible";
import styles from "./Title.module.scss";

export default function Title({
  className,
  id,
  children,
  variant,
  tag = "h1",
  subtitle,
}) {
  const [ref, isVisible] = useVisible();

  return (
    <div
      className={`${className ? className : ""} ${styles.title} ${
        variant ? styles[variant] : ""
      }`}
      id={id || ""}
    >
      <div className={styles.title_inner}>
        <Tag tag={tag} children={children} />
      </div>
      {subtitle && (
        <span
          className={`${styles.title_subtitle} ${
            isVisible ? styles.visible : ""
          }`}
          ref={ref}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

const Tag = ({ tag, children }) => {
  const Tag = tag.toLowerCase();

  return (
    <Tag className={styles.title_text} data-title={children}>
      {children}
    </Tag>
  );
};
