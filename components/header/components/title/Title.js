import styles from './Title.module.scss';

export default function Title({ onCV }) {
  return (
    <div className={styles.title}>
      <h1 style={{ WebkitTextFillColor: onCV ? '#9e8cfc' : null }}>
        Julien <br /> Berthoumieux
      </h1>
    </div>
  )
}