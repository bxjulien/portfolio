import Badge from '../badge';
import Card from '../card';
import Image from 'next/image';
import styles from './Studies.module.scss';
import Link from 'next/link';

export default function Studies() {
  return (
    <section id={styles.studies}>
      <Link href='https://www.epitech.eu' target={'_blank'}>
        <Card className={styles.study} variant='bordered'>
          <div className={styles.img}>
            <Image
              src={'/epitech.png'}
              height={'30'}
              width={'110'}
              alt='epitech logo'
            />
          </div>

          <div className={styles.badges}>
            <Badge>Master</Badge>
            <Badge variant='default'>2023</Badge>
            <Badge variant='default'>Alternance</Badge>
          </div>

          <span className={styles.title}>
            Architecte logiciel, développeur d'application
          </span>
        </Card>
      </Link>

      <Link href='https://www.epitech.eu' target={'_blank'}>
        <Card className={styles.study}>
          <div className={styles.img}>
            <Image
              src={'/epitech.png'}
              height={'30'}
              width={'110'}
              alt='epitech logo'
            />
          </div>

          <div className={styles.badges}>
            <Badge>Licence</Badge>
            <Badge variant='default'>2021</Badge>
            <Badge variant='default'>Alternance</Badge>
          </div>

          <span className={styles.title}>
            Concepteur développeur d'application
          </span>
        </Card>
      </Link>

      <Link href='https://www.wildcodeschool.com' target={'_blank'}>
        <Card className={styles.study}>
          <div className={styles.img}>
            <Image src={'/wcs.png'} height={'30'} width={'100'} alt='wcs logo' />
          </div>

          <div className={styles.badges}>
            <Badge>Bac +2</Badge>
            <Badge variant='default'>2020</Badge>
          </div>

          <span className={styles.title}>Développeur web et web mobile</span>
        </Card>
      </Link>
    </section>
  );
}