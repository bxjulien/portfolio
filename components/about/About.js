import useVisible from 'hooks/useVisible';
import useTranslation from 'next-translate/useTranslation';
import styles from './About.module.scss';

export default function About() {
  const [ref, isVisible] = useVisible();
  const { t } = useTranslation('common');

  return (
    <section className={styles.about}>
      <p ref={ref} className={isVisible ? styles.visible : ''}>
        {t('bio_1')}<span>{t('bio_2')}</span>{t('bio_3')}
        <br />
        {t('bio_4')}
        <br />
        {t('bio_5')}<span>{t('bio_6')}</span>{t('bio_7')}
        {t('bio_8')}<span>{t('bio_9')}</span>{t('bio_10')}<span>{t('bio_11')}</span>.
        <br />
        {t('bio_12')}<span>{t('bio_13')}</span>{t('bio_14')}<span>{t('bio_15')}</span>{t('bio_16')}
        <br />
        {t('bio_17')}👟
      </p>
    </section>
  );
}