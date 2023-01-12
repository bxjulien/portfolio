import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav id={styles.navbar}>
      <ul>
        <li>
          <a href='#works_title'>Travaux</a>
        </li>
        <li>
          <a href='#studies'>Études</a>
        </li>
        <li>
          <a href='#testimonials_title'>Témoignages</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
