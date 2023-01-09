import LsdBorder from '../lsd_border';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <LsdBorder>
        <form method='POST' action='https://formspree.io/f/xaylqzjy'>
          <input
            type='text'
            name='name'
            placeholder='Nom'
            className={styles.input}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className={styles.input}
          />

          <textarea
            name='message'
            placeholder='Message'
            className={styles.textarea}
          />

          <button type='submit' className={styles.button}>
            Envoyer
          </button>
        </form>
      </LsdBorder>
    </div>
  );
}
