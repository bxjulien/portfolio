import Contact from '@/components/contact/Contact';
import Layout from '@/components/_layout/Layout';
import Separator from '@/components/separator/Separator';
import Studies from '@/components/studies/Studies';
import Testimonials from '@/components/testimonials/Testimonials';
import Title from '@/components/title/Title';
import Works from '@/components/works/Works';
import useTranslation from 'next-translate/useTranslation';
import About from '@/components/about/About';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <About />

      <Separator letter='r' />

      <Title tag='h3' subtitle={t('projects_subtitle')} id='works'>
        {t('works')}
      </Title>

      <Works t={t} />

      <Separator letter='e' />

      <Title tag='h3' subtitle={t('studies_subtitle')} id='studies'>
        {t('studies')}
      </Title>

      <Studies t={t} />

      <Separator letter='a' />

      <Title tag='h3' id='testimonials'>
        {t('testimonials')}
      </Title>

      <Testimonials t={t} />

      <Separator letter='c' />

      <Title tag='h3' subtitle={t('contact_subtitle')} id='contact'>
        {t('contact')}
      </Title>

      <Contact t={t} />

      <Separator letter='t' />
    </Layout>
  );
}