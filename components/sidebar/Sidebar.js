import styles from './Sidebar.module.scss';
import { useState } from 'react';


function usePreferColorScheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('prefers-color-scheme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('prefers-color-scheme', 'light');
    }
  };

  return { theme, toggleTheme };
}

export default function Sidebar() {
  const { toggleTheme } = usePreferColorScheme();

  return (
    <nav id={styles.sidebar}>
      <ul>
        <li>
          <a href='#works_title'>Travaux</a>
        </li>
        <li>
          <a href='#studies_title'>Études</a>
        </li>
        <li>
          <a href='#testimonials_title'>Témoignages</a>
        </li>
        <li>
          <a href='#contact_title'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
