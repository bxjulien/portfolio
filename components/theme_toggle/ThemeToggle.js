import useToggleTheme from "hooks/useToggleTheme"
import styles from "./ThemeToggle.module.scss"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <label
      className={styles.container}
      title={true ? "Activate light mode" : "Activate dark mode"}
      aria-label={true ? "Activate light mode" : "Activate dark mode"}

    >
      <input
        type="checkbox"
        defaultChecked={true}
        onChange={toggleTheme}
      />
      <div />
    </label>
  )
}