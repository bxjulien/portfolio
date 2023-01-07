import Badge from '../badge';
import Card from '../card';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import Link from 'next/link';
import { RxExternalLink } from 'react-icons/rx';
import { TbBrandFirebase } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import styles from './Works.module.scss';

export default function Works({}) {
  return (
    <div id={styles.works}>
      <div className={styles.work}>
        <Link href='https://preprod-obie.vercel.app/' target={'_blank'}>
          <Card variant='no_padding'>
            <img src={'obie.png'} alt='work 1' />

            <div className={styles.work_content}>
              <h3>Obie.ch</h3>

              <p>
                Obie est une application web destinée aux travailleurs ou
                frontaliers suisses facilitant la récupération de leurs avoirs
                LPP.
              </p>

              <div className={styles.footer}>
                <div className={styles.badges}>
                  <Badge variant='default'>
                    <TbBrandNextjs size={25} />
                    Next.JS
                  </Badge>

                  <Badge variant='default'>
                    <FaReact size={25} color='#61DAFB' />
                    React
                  </Badge>

                  <Badge variant='default'>
                    <FaNodeJs size={25} color='#509941' />
                    Node.JS
                  </Badge>

                  <Badge variant='default'>
                    <TbBrandFirebase size={25} color='#FFCB2B' />
                    Firebase
                  </Badge>
                </div>

                <RxExternalLink
                  className={styles.icon}
                  size='25'
                  color='grey'
                />
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
