import styles from './Sidebar.module.scss';
import { useState } from 'react';

export default function Sidebar() {
  return (
    <nav id={styles.sidebar}>
      <ul>
        <li>
          <a href='#'>Accueil</a>
        </li>
        <li>
          <a href='#works_title'>Travaux</a>
        </li>
        <li>
          <a href='#studies_title'>Etudes</a>
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
