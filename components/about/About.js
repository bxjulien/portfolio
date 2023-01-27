import useVisible from 'hooks/useVisible';
import useTranslation from 'next-translate/useTranslation';
import styles from './About.module.scss';

export default function About() {
  const [ref, isVisible] = useVisible();
  const { t } = useTranslation('common');

  return (
    <section className={styles.about}>
      <p ref={ref} className={isVisible ? styles.visible : ''} dangerouslySetInnerHTML={{ __html: t('bio') }}></p>
    </section>
  );
}