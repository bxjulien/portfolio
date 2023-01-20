import Contact from '@/components/contact/Contact';
import Layout from '@/components/_layout';
import Separator from '@/components/separator';
import Studies from '@/components/studies/Studies';
import Testimonials from '@/components/testimonials';
import Title from '@/components/title';
import Works from '@/components/works';
import useTranslation from 'next-translate/useTranslation';
import About from '@/components/about/About';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <About />

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