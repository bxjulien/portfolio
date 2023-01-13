
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const router = useRouter();

  const [locale, setLocale] = useState('FR');

  useEffect(() => {
    if (navigator && navigator.language.split('-')[1] !== locale) {
      setLocale(navigator.language.split('-')[1]);
    }
  }, [])

  const handleChangeLocale = (value) => {
    setLocale(value.toUpperCase());
    router.push('/', '/', { locale: value });
  }

  const value = {
    locale: locale,
    handleChangeLocale
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocaleContext = () => {
  return useContext(LocaleContext);
};
