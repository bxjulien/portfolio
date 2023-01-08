import Layout from '@/components/_layout';
import Separator from '@/components/separator';
import Studies from '@/components/studies/Studies';
import Testimonials from '@/components/testimonials';
import Title from '@/components/title';
import Works from '@/components/works';
import styles from '../styles/Home.module.scss';

const studiesSubtitle =
  "Mon parcours de reconversion professionnelle entrepris en 2019 à l'âge de 25 ans.";
const projectsSubtitle =
  'Les solutions dont je suis fier, réalisées dans le cadre de commande client ou de projet personnel.';
const contactSubtitle =
  'Un projet en tête ? Une question ? Je me ferais un plaisir de vous répondre !';

export default function Home() {
  return (
    <Layout>
      <About />

      <Separator letter='j' />

      <Title tag='h3' subtitle={projectsSubtitle} id='works_title'>
        travaux
      </Title>

      <Works />

      <Separator letter='u' />

      <Title tag='h3' subtitle={studiesSubtitle} id='studies'>
        études
      </Title>

      <Studies />

      <Separator letter='l' />

      <Title tag='h3' id='testimonials_title'>
        Témoignages
      </Title>

      <Testimonials />

      <Separator letter='i' />

      <Title tag='h3' subtitle={contactSubtitle} id='contact'>
        Contact
      </Title>

      <Separator letter='e' />
    </Layout>
  );
}

const About = () => {
  return (
    <section className={styles.about}>
      <p style={{ padding: '2rem 0' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};
