import useToggleTheme from "hooks/useToggleTheme"
import styles from "./ThemeToggle.module.scss"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <label
      className={styles.container}
      title={theme === 'dark' ? "Activate light mode" : "Activate dark mode"}
      aria-label={theme === 'dark' ? "Activate light mode" : "Activate dark mode"}
    >
      <input
        type="checkbox"
        defaultChecked={theme == 'dark' ? true : false}
        onClick={toggleTheme}
      />
      <div />
    </label>
  )
}