import useWindowWidth from 'hooks/useWindowWidth';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LocaleToggle from '../locale_toggle/LocaleToggle';
import { Squeeze as Burger } from 'hamburger-react';
import styles from './Navbar.module.scss';

const toggleStyles = (isNavbarOpen, width) => {
  const bodyOpenStyles = {
    filter: 'blur(5px)',
    userSelect: 'none',
    opacity: '.35',
  };

  const bodyClosedStyles = {
    filter: 'blur(0)',
    userSelect: 'auto',
    opacity: '1',
  };

  const bodyStyles = isNavbarOpen ? bodyOpenStyles : bodyClosedStyles;

  if (width <= 650) {
    document.body.style.overflow = isNavbarOpen ? 'hidden' : 'auto';
    Object.assign(document.querySelector('header').style, bodyStyles);
    Object.assign(document.querySelector('main').style, bodyStyles);
    document.querySelector('nav ul').style.transform = isNavbarOpen
      ? 'translateX(2rem)'
      : 'translateX(calc(-100% - 2rem))';
  } else {
    document.body.style.overflow = 'auto';
    Object.assign(document.querySelector('header').style, bodyClosedStyles);
    Object.assign(document.querySelector('main').style, bodyClosedStyles);
    document.querySelector('nav ul').style.transform = 'translateX(0)';
  }
};

export default function Navbar({ }) {
  const { t } = useTranslation('common');

  const router = useRouter();

  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const [navLinks, setNavLinks] = useState([]);
  const navActions = [
    {
      id: 1,
      component: <LocaleToggle />,
      show: true,
    },
  ];


  useEffect(() => {
    setNavLinks(getNavLinks());
  }, [t]);

  /**
   * Close navbar on route change
   */
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsOpen(false);
    });

    return () => {
      router.events.off('routeChangeStart');
    };
  }, []);

  /**
   * Handle styles on navbar open/close, window resize
   */
  useEffect(() => {
    toggleStyles(isOpen, width);
  }, [isOpen, width]);

  const getNavLinks = () => {
    const links = [
      {
        id: 1,
        name: t('works'),
        path: '#works',
        show: true,
      },
      {
        id: 2,
        name: t('studies'),
        path: '#studies',
        show: true,
      },
      {
        id: 3,
        name: t('testimonials'),
        path: '#testimonials',
        show: true,
      },
      {
        id: 4,
        name: t('contact'),
        path: '#contact',
        show: true,
      },
    ];

    return links;
  };

  return (
    <nav id={styles.navbar}>
      <div className={styles.mobile}>
        <div className={styles.burger}>
          <Burger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
      </div>

      <ul id={styles.navbar_ul}>
        <div className={styles.links}>
          {navLinks
            .filter((link) => link.show)
            .map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.path} className={link.class}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
        </div>

        <div className={styles.actions}>
          {navActions.map((action) => {
            return action.show && <li key={action.id}>{action.component}</li>;
          })}
        </div>
      </ul>
    </nav>
  );
}
