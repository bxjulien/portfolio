
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useLocale() {
  const router = useRouter();

  useEffect(() => {
    if (navigator) {
      const currentBrowserLocale = navigator.language.split('-')[0];

      if (currentBrowserLocale !== router.locale) {
        handleChangeLocale(currentBrowserLocale);
      }
    }
  }, []);

  const handleChangeLocale = (value) => {
    router.push('/', '/', { locale: value });
  }

  return {
    locale: router.locale,
    handleChangeLocale
  };
}