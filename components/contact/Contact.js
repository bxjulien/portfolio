import LsdBorder from '../lsd_border';
import styles from './Contact.module.scss';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const name = data.get('name');

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
        setStatus({ submitted: true, error: false, name });
      })
      .catch(() => setStatus({ submitted: false, error: true }));
  };

  return (
    <div className={styles.contact}>
      <LsdBorder>
        {status.submitted || status.error ? (
          <Response status={status} />
        ) : (
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Nom' required />
            <input type='email' name='email' placeholder='Email' required />

            <textarea name='message' placeholder='Message' required />

            <button type='submit' className={styles.button}>
              Envoyer
            </button>
          </form>
        )}
      </LsdBorder>
    </div>
  );
}

const Response = ({ status }) => {
  return (
    <div className={styles.response}>
      {status.submitted ? (
        <p className={styles.success}>
          Merci {status.name}, je vous recontacte très vite !
        </p>
      ) : (
        <p className={styles.error}>
          Oupsi, une erreur est survenue. Je m'occupe de ça rapidement !
        </p>
      )}
    </div>
  );
};
