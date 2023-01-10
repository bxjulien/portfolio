import LsdBorder from '../lsd_border';
import styles from './Contact.module.scss';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get('name'));
    console.log(data.get('email'));
    console.log(data.get('message'));

    fetch(
      'https://public.herotofu.com/v1/7c39c920-9126-11ed-a003-6f0b76086b1c',
      { method: 'POST', body: data }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.contact}>
      <LsdBorder>
        <form onSubmit={handleSubmit}>
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
