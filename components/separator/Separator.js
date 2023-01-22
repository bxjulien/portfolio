import styles from "./Separator.module.scss";

export default function Separator({ letter }) {
  switch (letter) {
    case "r":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
          <div className={styles.short}></div>
        </div>
      );
    case "e":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
        </div>
      );
    case "a":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
        </div>
      );
    case "c":
      return (
        <div className={styles.separator}>
          <div className={styles.long}></div>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
          <div className={styles.short}></div>
        </div>
      );
    case "t":
      return (
        <div className={styles.separator}>
          <div className={styles.long}></div>
        </div>
      );
  }
}