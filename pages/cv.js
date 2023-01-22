import Header from '@/components/header/Header';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/CV.module.scss';
import { FaUser } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoSchool } from 'react-icons/io5';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandFirebase } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiCypress } from 'react-icons/si';
import Badge from '@/components/badge/Badge';
import Link from 'next/link';

export default function CV() {
  const { t } = useTranslation('common');

  return (
    <div id={styles.cv}>
      <div className={styles.page}>
        <Header t={t} onCV />

        <div className={styles.content}>
          <div className={styles.main}>
            <section className={styles.profile}>

              <div className={styles.title}>
                <div className={styles.icon}>
                  <FaUser size="22" />
                </div>
                <h3>Profil</h3>
              </div>

              <div className={styles.info}>
                <p>
                  Jeune développeur passionné, je suis à la recherche d'une entreprise pour continuer à développer mes compétences et contribuer au succès de projets ambitieux.
                  <br />
                  Mon entrain et mon esprit d'équipe font de moi un candidat idéal pour intégrer une équipe et l'aider à atteindre ses objectifs.
                </p>
              </div>

            </section>

            <section className={styles.experiences}>

              <div className={styles.title}>
                <div className={styles.icon}>
                  <BsFillBriefcaseFill size="22" />
                </div>
                <h3>Experiences professionnelles</h3>
              </div>

              <div className={styles.ubigreen}>
                <div className={styles.info}>
                  <div>
                    <h4>Développeur Web Fullstack, Ubigreen, Alternance</h4>
                    <span>Mars 2020 - Présent</span>
                  </div>

                  <p>
                    J'interviens sur les applications web et mobile de mon entreprise en travaillant en étroite collaboration avec l'ensemble des équipes.
                  </p>

                  <p>
                    Activitées principales :
                  </p>

                  <ul>
                    <li>Développement de nouvelles fonctionnalités</li>
                    <li>Maintenance condition opérationnelle</li>
                    <li>Ecriture de test End to End</li>
                    <li>Intégration de données</li>
                  </ul>
                </div>

              </div>

              <div className={styles.obie}>
                <div className={styles.info}>
                  <div>
                    <h4>Ingénieur Logiciel Web, Obie, Indépendant</h4>
                    <span>Juin 2022 - Présent</span>
                  </div>

                  <p>
                    Obie est une application web destinée aux travailleurs ou frontaliers suisses facilitant la récupération de leurs avoirs LPP.
                    <br />
                    Je tiens le rôle de lead concepteur développeur et travaille en collaboration avec mon client qui est maitre des règles métiers.
                  </p>

                  <p>
                    Les fonctionnalités principales sont :
                  </p>

                  <ul>
                    <li>Landing page publique présentant le produit</li>
                    <li>Formulaire avancé de recherche d'avoirs LPP</li>
                    <li>Dashboard administrateur sécurisé proposant une gestion totale des données</li>
                    <li>Emailing sur mesure</li>
                    <li>Génération de PDF sur mesure</li>
                    <li>Gestion intégrale multi-langues</li>
                  </ul>


                </div>
              </div>

            </section>

            <section className={styles.educations}>

              <div className={styles.title}>
                <div className={styles.icon}>
                  <IoSchool size="22" />
                </div>
                <h3>Etudes</h3>
              </div>

              <div className={styles.info}>
                <div className={styles.master}>
                  <div>
                    <h4>Epitech, Master</h4>
                    <span className={styles.dates}>Septembre 2021 - Juillet 2023</span>
                  </div>
                  <p>Architecte Logiciel Développeur d'Applications</p>
                </div>

                <div>
                  <div>
                    <h4>Epitech, Licence</h4>
                    <span className={styles.dates}>Septembre 2020 - Septembre 2021</span>
                  </div>
                  <p>Concepteur Développeur d'Application</p>
                </div>

                <div>
                  <div>
                    <h4>Wild Code School, Bac +2</h4>
                    <span className={styles.dates}>Septembre 2019 - Juin 2020</span>
                  </div>
                  <p>Développeur Web et Mobile</p>
                </div>
              </div>

            </section>
          </div>

          <div className={styles.details}>
            <section>
              <h3>Details</h3>
              <Link href='mailto:julienberthoumieux.dev@gmail.com'>
                contact@bxjulien.com
              </Link>
              <span>
                06 13 12 45 08
              </span>
              <span>
                28 ans
              </span>
            </section>

            <section>
              <h3>Technologies</h3>

              <Badge variant='classic'>
                <TbBrandNextjs size={25} />
                Next.JS
              </Badge>

              <Badge variant='classic'>
                <FaReact size={25} color='#61DAFB' />
                React
              </Badge>

              <Badge variant='classic'>
                <FaNodeJs size={25} color='#509941' />
                Node.JS
              </Badge>

              <Badge variant='classic'>
                <TbBrandFirebase size={24.5} color='#FFCB2B' />
                Firebase
              </Badge>

              <Badge variant='classic'>
                <SiCypress size={22} color='black' />
                Cypress
              </Badge>

            </section>

            <section>
              <h3>Soft Skills</h3>

              <Badge variant='classic'>
                Esprit d'équipe
              </Badge>

              <Badge variant='classic'>
                Bon relationnel
              </Badge>

              <Badge variant='classic'>
                Proactif
              </Badge>

              <Badge variant='classic'>
                Autonome
              </Badge>

              <Badge variant='classic'>
                Créatif
              </Badge>

            </section>

            <section>
              <h3>Activités</h3>

              <Badge variant='classic'>
                Trail / Running
              </Badge>

              <Badge variant='classic'>
                Cinéma
              </Badge>

            </section>
          </div>
        </div>

      </div>
    </div>
  )
}