import useToggleTheme from "hooks/useToggleTheme"
import { BsMoonFill } from "react-icons/bs"
import { MdWbSunny } from "react-icons/md"
import styles from "./ThemeToggle.module.scss"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div className={styles.theme_toggle} onClick={toggleTheme}>
      {theme === 'dark'
        ? <MdWbSunny size={20} color='#00c2d7' />
        : <BsMoonFill size={20} color='#9e8cfc' />
      }
    </div>
  )
}