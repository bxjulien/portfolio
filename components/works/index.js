import Card from '../card';
import Link from 'next/link';
import styles from './Works.module.scss';

export default function Works({}) {
  return (
    <div id={styles.works}>
      <Link href='https://preprod-obie.vercel.app/' target={'_blank'}>
        <div className={styles.work}>
          <Card variant='no_padding'>
            <img src={'obie.png'} alt='work 1' />
          </Card>
        </div>
      </Link>
    </div>
  );
}
