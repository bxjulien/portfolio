import styles from './Mesh.module.scss';

export default function Mesh({ className, children, variant, mesh }) {
  return (
    <div
      className={
        `${className ? className : ''} ${styles.mesh} ${variant ? styles[variant] : ''}`
      }
      style={mesh ? { "background": mesh } : {}}
    >
    </div>
  )
}