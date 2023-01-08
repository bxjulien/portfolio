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
        <Card variant='no_padding'>
          <img src={'obie.png'} alt='work 1' />

          <div className={styles.work_content}>
            <div className={styles.title}>
              <h3>Obie.ch</h3>
              <small>Juin 2021 - Présent</small>
            </div>

            <div className={styles.description}>
              Obie est une application web destinée aux travailleurs ou
              frontaliers suisses facilitant la récupération de leurs avoirs
              LPP.
              <br />
              Je tiens le rôle de lead concepteur développeur et travaille en
              collaboration avec mon client qui est maitre des règles métiers.
              <br />
              <br />
              Les fonctionnalités principales sont :
              <br />
              <br />
              <ul>
                <li>
                  <strong>Landing page publique</strong> présentant le produit
                </li>
                <li>
                  <strong>Formulaire avancé</strong> de recherche d'avoirs LPP
                </li>
                <li>
                  <strong>Dashboard administrateur sécurisé</strong> proposant
                  une gestion totale des données
                </li>
                <li>
                  <strong>Emailing</strong> sur mesure via{' '}
                  <code>Nodemailer</code>
                </li>
                <li>
                  <strong>Génération de PDF</strong> sur mesure via{' '}
                  <code>Puppeteer</code>
                </li>
                <li>
                  <strong>Gestion intégrale multi-langues</strong> via{' '}
                  <code>i18n</code>
                </li>
              </ul>
            </div>

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
            </div>
          </div>
          <div className={styles.alert}>
            <small>Release 2023</small>
          </div>
        </Card>
      </div>
    </div>
  );
}
