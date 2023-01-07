import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <nav id={styles.sidebar}>
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
