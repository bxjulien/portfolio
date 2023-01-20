import { useState, useEffect } from 'react';

const getWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
}

export default function useWindowWidth() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 20);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}
