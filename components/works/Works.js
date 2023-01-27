import Badge from '../badge/Badge';
import Card from '../card/Card';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { TbBrandFirebase } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiCypress } from 'react-icons/si';
import styles from './Works.module.scss';
import Image from 'next/image';

export default function Works({ t }) {
  return (
    <section id={styles.works}>
      <div className={styles.work}>
        <Card variant='no_padding'>
          <div className={styles.image}>
            <div className={styles.overlay}>
              <small>Release 2023</small>
            </div>
            <Image src={'/obie2.png'}
              alt='obie.ch'
              width={800}
              height={500}
              quality={100}
            />
          </div>

          <div className={styles.work_content}>
            <div className={styles.title}>
              <h3>Obie.ch</h3>
              <small>{t('obie_dates')}</small>
            </div>

            <div className={styles.description}>
              <p>
                {t('obie_description_1')}
                <br />
                <br />
                {t('obie_description_2')}
                <br />
                <br />
                {t('obie_description_3')}
                <br />
                <br />
              </p>
              <ul>
                <li>
                  <strong>{t('obie_feature_1_0')}</strong> {t('obie_feature_1_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_2_0')}</strong> {t('obie_feature_2_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_3_0')}</strong> {t('obie_feature_3_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_4_0')}</strong> {t('obie_feature_4_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_5_0')}</strong> {t('obie_feature_4_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_6_0')}</strong>
                </li>
              </ul>
            </div>

            <div className={styles.footer}>
              <div className={styles.badges}>
                <Badge variant='default'>
                  <TbBrandNextjs size={27} />
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


                <Badge variant='default'>
                  <SiCypress size={22} />
                  Cypress
                </Badge>

              </div>
            </div>
          </div>
          <div className={styles.alert}>
            <small>Release 2023</small>
          </div>
        </Card>
      </div>
    </section>
  );
}
