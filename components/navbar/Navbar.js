import { useEffect, useState } from 'react';

import { Cross as Burger } from 'hamburger-react';
import { FiDownloadCloud } from 'react-icons/fi';
import Link from 'next/link';
import LocaleToggle from '../locale_toggle/LocaleToggle';
import ThemeToggle from '../theme_toggle/ThemeToggle';
import styles from './Navbar.module.scss';
import useTranslation from 'next-translate/useTranslation';
import useWindowWidth from 'hooks/useWindowWidth';

const BREAKPOINT = 750;

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

  if (width <= BREAKPOINT) {
    document.body.style.overflow = isNavbarOpen ? 'hidden' : 'auto';
    Object.assign(document.querySelector('header').style, bodyStyles);
    Object.assign(document.querySelector('main').style, bodyStyles);
    document.querySelector('nav ul').style.transform = isNavbarOpen
      ? 'translateX(2rem)'
      : 'translateX(calc(-100% - 2rem))';
    document
      .querySelectorAll('nav ul div li')
      .forEach((e) => (e.style.display = isNavbarOpen ? 'flex' : 'none'));
  } else {
    document.body.style.overflow = 'auto';
    Object.assign(document.querySelector('header').style, bodyClosedStyles);
    Object.assign(document.querySelector('main').style, bodyClosedStyles);
    document.querySelector('nav ul').style.transform = 'translateX(0)';
    document
      .querySelectorAll('nav ul div li')
      .forEach((e) => (e.style.display = 'flex'));
  }
};

export default function Navbar({}) {
  const { t } = useTranslation('common');

  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const [navActions, setNavActions] = useState([]);

  const mobileNavHead = <ThemeToggle />;

  useEffect(() => {
    setNavLinks(getNavLinks());
    setNavActions(getNavActions());
  }, [t, isOpen, width]);

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
        name: t('projects'),
        path: '#projects',
        show: isOpen || width > BREAKPOINT,
      },
      {
        id: 2,
        name: t('educations'),
        path: '#educations',
        show: isOpen || width > BREAKPOINT,
      },
      {
        id: 3,
        name: t('testimonials'),
        path: '#testimonials',
        show: isOpen || width > BREAKPOINT,
      },
      {
        id: 4,
        name: t('contact'),
        path: '#contact',
        show: isOpen || width > BREAKPOINT,
      },
    ];

    return links;
  };

  const getNavActions = () => {
    const actions = [
      {
        id: 1,
        component: <ThemeToggle />,
        show: width > BREAKPOINT,
      },
      {
        id: 2,
        component: (
          <Link href='/BerthoumieuxJulien.pdf' name='resume' target={'_blank'}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}
            >
              <FiDownloadCloud size={20} /> CV
            </div>
          </Link>
        ),
        show: isOpen || width > BREAKPOINT,
      },
      {
        id: 3,
        component: <LocaleToggle />,
        show: isOpen || width > BREAKPOINT,
      },
    ];

    return actions;
  };

  return (
    <nav id={styles.navbar}>
      <div className={styles.mobile}>
        <div className={styles.head}>{mobileNavHead}</div>
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
                <li key={link.id} onClick={() => setIsOpen(false)}>
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
