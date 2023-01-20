import useVisible from 'hooks/useVisible';
import useTranslation from 'next-translate/useTranslation';
import styles from './About.module.scss';

export default function About() {
  const [ref, isVisible] = useVisible();
  const { t } = useTranslation('common');

  return (
    <section className={styles.about}>
      <p ref={ref} className={isVisible ? styles.visible : ''}>
        {t('bio_1')}<code>{t('bio_2')}</code>{t('bio_3')}
        <br />
        {t('bio_4')}
        <br />
        {t('bio_5')}<code>{t('bio_6')}</code>{t('bio_7')}
        {t('bio_8')}<code>{t('bio_9')}</code>{t('bio_10')}<code>{t('bio_11')}</code>.
        <br />
        {t('bio_12')}<code>{t('bio_13')}</code>{t('bio_14')}<code>{t('bio_15')}</code>{t('bio_16')}
        <br />
        {t('bio_17')}👟
      </p>
    </section>
  );
}

/* 
I am a 28 year old passionate developer based in Toulouse.

  J'aime designer, concevoir et développer des applications
numériques afin de résoudre des problèmes de la vie courante.

I have been working for 3 years at Ubigreen as a fullstack web developer alternation.
Cette alternance me permet d'obtenir <code>diplôme d'ingénieur en informatique dans l'école Epitech.

I also hold the role of designer developer on the Obie web application for almost 1 year,
  a customer order that will be released soon.

When I'm offline, I spend my time in nature training for my future trail competitions.  */