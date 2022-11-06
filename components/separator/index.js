import styles from "./Separator.module.scss";

export default function Separator({ letter }) {
  switch (letter) {
    case "j":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
          <div className={styles.long}></div>
          <div className={styles.long}></div>
        </div>
      );
    case "u":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
        </div>
      );
    case "l":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.long}></div>
          <div className={styles.short}></div>
          <div className={styles.short}></div>
        </div>
      );
    case "i":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
          <div className={styles.short}></div>
        </div>
      );
    case "e":
      return (
        <div className={styles.separator}>
          <div className={styles.short}></div>
        </div>
      );
    case "n":
      return (
        <div className={styles.separator}>
          <div className={styles.long}></div>
          <div className={styles.short}></div>
        </div>
      );
    default:
      return (
        <div className={styles.separator}>
          <div className={styles.long}></div>
        </div>
      );
  }
}