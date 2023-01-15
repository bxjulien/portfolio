import { useEffect, useState } from "react";

export default function useToggleTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const themeAtLoad = localStorage.getItem("theme") || 'dark';
    setTheme(themeAtLoad);
    setDocumentTheme(themeAtLoad);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setDocumentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return [theme, toggleTheme];
}

function setDocumentTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}