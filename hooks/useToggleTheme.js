import { useEffect, useState } from "react";

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

export default function useToggleTheme() {
  const [theme, setTheme] = useState(DARK_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem("bxjulien.com.theme") || DARK_THEME;
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(newTheme);
  }

  const applyTheme = (theme) => {
    setDocumentTheme(theme);
    setTheme(theme);
    localStorage.setItem("bxjulien.com.theme", theme);
  }

  return { theme, toggleTheme };
}

function setDocumentTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}
