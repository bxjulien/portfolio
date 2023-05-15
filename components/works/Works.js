import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiCypress,
  SiGraphql,
  SiLerna,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { TbBrandFirebase, TbBrandNextjs } from 'react-icons/tb';

import Badge from '../badge/Badge';
import Card from '../card/Card';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Works.module.scss';

export default function Works({ t }) {
  return (
    <section id={styles.works}>
      <div className={styles.work}>
        <Card variant='no_padding'>
          <div className={styles.image}>
            <div className={styles.overlay}>
              <small>Release 2023</small>
            </div>
            <Image
              src={'/obie2.png'}
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
                  <strong>{t('obie_feature_1_0')}</strong>{' '}
                  {t('obie_feature_1_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_2_0')}</strong>{' '}
                  {t('obie_feature_2_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_3_0')}</strong>{' '}
                  {t('obie_feature_3_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_4_0')}</strong>{' '}
                  {t('obie_feature_4_1')}
                </li>
                <li>
                  <strong>{t('obie_feature_5_0')}</strong>{' '}
                  {t('obie_feature_4_1')}
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

      <div className={styles.work}>
        <Card variant='no_padding'>
          <Link
            href='https://github.com/bxjulien/blabble'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.image}>
              <Image
                src={'/blabble.png'}
                alt='blabble'
                width={800}
                height={500}
                quality={100}
              />
            </div>
          </Link>

          <div className={styles.work_content}>
            <div className={styles.title}>
              <h3>Blabble</h3>
            </div>

            <div className={styles.description}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('blabble_description').replace(
                    '"’blank’"',
                    '"_blank"'
                  ),
                }}
              ></p>
            </div>

            <div className={styles.footer}>
              <div className={styles.badges}>
                <Badge variant='default'>
                  <SiTypescript size={22} color='#2F74C0' />
                  TypeScript
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
                  <SiGraphql size={24} color='#DE33A6' />
                  GraphQL
                </Badge>

                <Badge variant='default'>
                  <SiPrisma size={25} />
                  Prisma
                </Badge>

                <Badge variant='default'>
                  <SiVite size={25} color='#FFB70F' />
                  Vite
                </Badge>
              </div>
            </div>
          </div>
          <div className={styles.alert}>
            <small>
              <a href='https://github.com/bxjulien/blabble' target='_blank'>
                {t('source_code')}
              </a>
            </small>
          </div>
        </Card>
      </div>

      <div className={styles.work}>
        <Card variant='no_padding'>
          <div className={styles.work_content}>
            <div className={styles.title}>
              <h3>RaceQuest</h3>
            </div>

            <div className={styles.description}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('racequest_description'),
                }}
              ></p>
            </div>

            <div className={styles.footer}>
              <div className={styles.badges}>
                <Badge variant='default'>
                  <SiTypescript size={22} color='#2F74C0' />
                  TypeScript
                </Badge>

                <Badge variant='default'>
                  <FaReact size={25} color='#61DAFB' />
                  React Native
                </Badge>

                <Badge variant='default'>
                  <SiNestjs size={25} color='#E0234E' />
                  NestJS
                </Badge>

                <Badge variant='default'>
                  <FaNodeJs size={25} color='#509941' />
                  Node.JS
                </Badge>

                <Badge variant='default'>
                  <SiSupabase size={25} color='#40BF86' />
                  Supabase
                </Badge>

                <Badge variant='default'>
                  <SiLerna size={25} color='#B671FC' />
                  Lerna
                </Badge>
              </div>
            </div>
          </div>
          <div className={styles.alert}>
            <small>
              <a href='https://github.com/bxjulien/racequest' target='_blank'>
                {t('source_code')}
              </a>
            </small>
          </div>
        </Card>
      </div>
    </section>
  );
}
