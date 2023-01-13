
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const router = useRouter();

  const [locale, setLocale] = useState('')

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

