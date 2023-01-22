import Image from 'next/image';
import styles from './PP.module.scss';

export default function PP() {
  return (
    <Image
      src={'/pp.jpg'}
      alt='profile picture'
      width={200}
      height={200}
      quality={100}
      className={styles.pp}
    />
  )
}