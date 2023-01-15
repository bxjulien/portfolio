import Contact from '@/components/contact/Contact';
import Layout from '@/components/_layout';
import Separator from '@/components/separator';
import Studies from '@/components/studies/Studies';
import Testimonials from '@/components/testimonials';
import Title from '@/components/title';
import Works from '@/components/works';
import styles from '../styles/Home.module.scss';
import useTranslation from 'next-translate/useTranslation';
import useToggleTheme from 'hooks/useToggleTheme';

export default function Home() {
  const { t } = useTranslation('common');
  const [theme, toggleTheme] = useToggleTheme();

  return (
    <Layout>
      <Separator letter='j' />

      <Title tag='h3' subtitle={t('projects_subtitle')} id='works'>
        {t('works')}
      </Title>

      <Works t={t} />

      <Separator letter='u' />

      <Title tag='h3' subtitle={t('studies_subtitle')} id='studies'>
        {t('studies')}
      </Title>

      <Studies t={t} />

      <Separator letter='l' />

      <Title tag='h3' id='testimonials'>
        {t('testimonials')}
      </Title>

      <Testimonials t={t} />

      <Separator letter='i' />

      <Title tag='h3' subtitle={t('contact_subtitle')} id='contact'>
        {t('contact')}
      </Title>

      <Contact t={t} />

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
