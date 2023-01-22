import Image from 'next/image';
import styles from './PP.module.scss';

export default function PP({ onCV }) {
  return (
    <Image
      src={'/pp.jpg'}
      alt='profile picture'
      width={200}
      height={200}
      quality={100}
      className={styles.pp}
      style={{ width: onCV ? '115px' : '150px', height: onCV ? '130px' : '150px' }}
    />
  )
}