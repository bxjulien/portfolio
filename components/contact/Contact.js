import LsdBorder from '../lsd_border/LsdBorder';
import styles from './Contact.module.scss';
import { useState } from 'react';

export default function Contact({ t }) {
  const [status, setStatus] = useState({
    submitted: false,
    error: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(
      process.env.HEROTOFU_FORM_ENDPOINT,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        setStatus({ submitted: true, error: false });
      })
      .catch(() => setStatus({ submitted: false, error: true }));
  };

  return (
    <section className={styles.contact}>
      <LsdBorder>
        {status.submitted || status.error ? (
          <Response status={status} t={t} />
        ) : (
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder={t('name')} required />
            <input type='email' name='email' placeholder='Email' required />

            <textarea name='message' placeholder='Message' required />

            <button type='submit' className={styles.button}>
              {t('send')}
            </button>
          </form>
        )}
      </LsdBorder>
    </section>
  );
}

const Response = ({ status, t }) => {
  return (
    <div className={styles.response}>
      {status.submitted ? (
        <p className={styles.success}>
          {t('contact_success')}
        </p>
      ) : (
        <p className={styles.error}>
          {t('contact_error')}
        </p>
      )}
    </div>
  );
};
