import Badge from '../badge/Badge';
import Card from '../card/Card';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Studies.module.scss';

export default function Studies({ t }) {
  return (
    <section id={styles.studies}>
      <Card className={`${styles.study} ${styles.master}`} variant='bordered'>
        <div className={styles.img}>
          <Link href='https://www.epitech.eu' target={'_blank'}>
            <Image
              src={'/epitech.png'}
              height={'30'}
              width={'110'}
              alt='epitech logo'
            />
          </Link>
        </div>

        <div className={styles.badges}>
          <Badge variant='primary'>Master</Badge>
          <Badge variant='default'>2023</Badge>
          <Badge variant='default'>{t('apprenticeship')}</Badge>
        </div>

        <span className={styles.title}>
          Architecte Logiciel, Développeur d'Application
        </span>
      </Card>

      <Card className={styles.study}>
        <div className={styles.img}>
          <Link href='https://www.epitech.eu' target={'_blank'}>
            <Image
              src={'/epitech.png'}
              height={'30'}
              width={'110'}
              alt='epitech logo'
            />
          </Link>
        </div>

        <div className={styles.badges}>
          <Badge variant='primary'>Licence</Badge>
          <Badge variant='default'>2021</Badge>
          <Badge variant='default'>{t('apprenticeship')}</Badge>
        </div>

        <span className={styles.title}>
          Concepteur Développeur d'Application
        </span>
      </Card>

      <Card className={styles.study}>
        <div className={styles.img}>
          <Link href='https://www.wildcodeschool.com' target={'_blank'}>
            <Image
              src={'/wcs.png'}
              height={'30'}
              width={'100'}
              alt='wcs logo'
            />
          </Link>
        </div>

        <div className={styles.badges}>
          <Badge variant='primary'>Bac +2</Badge>
          <Badge variant='default'>2020</Badge>
        </div>

        <span className={styles.title}>Développeur Web et Web Mobile</span>
      </Card>
    </section>
  );
}
