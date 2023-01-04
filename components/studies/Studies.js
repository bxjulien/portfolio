import Badge from '../badge';
import Card from '../card';
import Image from 'next/image';
import Mesh from '../mesh';
import styles from './Studies.module.scss';

const epitechMesh =
  'radial-gradient(circle at top right, #0051ff22, transparent 60%)';
const wcsMesh =
  'radial-gradient(circle at top right, #88343622, transparent 60%)';

export default function Studies() {
  return (
    <section id={styles.studies}>
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
    </section>
  );
}
