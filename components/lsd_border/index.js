import { useEffect, useRef } from 'react';
import styles from './LsdBorder.module.scss';

const getDegree = (element, event) => {
  const { left, top } = element.getBoundingClientRect();
  const x = event.clientX - left;
  const y = event.clientY - top;
  const degree = Math.atan2(y, x) * 180 / Math.PI + 180;

  return degree;
}

const useGradientBorder = () => {
  const ref = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const degree = getDegree(ref.current, event);
      ref.current.style.setProperty('--gradient-rotation', `${degree}deg`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
}

export default function LsdBorder({ children }) {
  const ref = useGradientBorder();

  return (
    <div ref={ref} className={styles.lsd_border}>
      {children}
    </div>
  )
}