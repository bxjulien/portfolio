import Card from '../card';
import Image from 'next/image';
import styles from './Testimonials.module.scss';

export default function Testimonials({ t }) {
  const testimonials = [
    {
      cite: "Julien a pour moi toutes les qualités nécessaires à un bon développeur. Il s'est montré passionné par l'apprentissage du code et n'a pas hésité à enrichir ses compétences quand l'occasion se présentait. Il s'est montré très efficace dans la réalisation des projets qu'il a initié ou qui lui ont été confiés durant la formation. Son humour et sa bonne humeur quotidienne en ont également fait un collaborateur très apprécié par ses camarades de promo (et moi-même).",
      name: 'Geoffroy Peyriot',
      job: `${t('professor')} @ Wild Code School`,
      avatar: '/geoffroy.png',
    },
    /*     {
          cite: 'On est max ?',
          name: 'Antoine Scié',
          job: 'CTO @ Obie',
          avatar: '/antoine.png',
        }, */
  ];

  return (
    <section id={styles.testimonials}>
      {testimonials.map((t) => {
        const { cite, name, job, avatar } = t;

        return (
          <Card key={name} className={styles.testimonial} variant='bordered'>
            <figure>
              <blockquote>
                <p>
                  <code>"</code>
                  {cite}
                  <code>"</code>
                </p>
              </blockquote>
              <figcaption>
                <Avatar imageUrl={avatar} alt={name} />
                {name}
                <cite>{job}</cite>
              </figcaption>
            </figure>
          </Card>
        );
      })}
    </section>
  );
}

const Avatar = ({ imageUrl, alt }) => {
  return (
    <div className={styles.avatar}>
      <Image src={imageUrl} fill alt={alt} />
    </div>
  );
};
