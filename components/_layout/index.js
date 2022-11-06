import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div id={styles.layout}>
      <main>{children}</main>
    </div>
  )
}