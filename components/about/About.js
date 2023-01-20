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