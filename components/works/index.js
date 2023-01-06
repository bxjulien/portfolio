import Card from '../card';
import Link from 'next/link';
import styles from './Works.module.scss';
import { RxExternalLink } from 'react-icons/rx';
import Badge from '../badge';

export default function Works({ }) {
  return (
    <div id={styles.works}>
      <div className={styles.work}>
        <Link href='https://preprod-obie.vercel.app/' target={'_blank'}>
          <Card variant='no_padding'>
            <img src={'obie.png'} alt='work 1' />

            <div className={styles.work_content}>
              <h3>Obie.ch</h3>

              <p>
                Obie est une application web destinée aux travailleurs ou frontaliers suisses facilitant la récupération de leurs avoirs LPP.
              </p>

              <div className={styles.footer}>
                <div className={styles.badges}>
                  <Badge variant='default'>Next.JS</Badge>
                  <Badge variant='default'>React</Badge>
                  <Badge variant='default'>Node.JS</Badge>
                  <Badge variant='default'>GCP</Badge>
                </div>


                <RxExternalLink className={styles.icon} size='24' color='grey' />
              </div>
            </div>


          </Card>
        </Link>
      </div>
    </div>
  );
}
