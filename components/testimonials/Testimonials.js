import Card from '../card/Card';
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
    {
      cite: `Julien est un grand professionnel qui sait se sublimer quand une mission lui est confiée. Dans le développement d'Obie, non seulement il a su nous aiguiller et mener à bien ses missions, mais il est même allé jusqu'à nous suggérer des pistes d'amélioration auxquelles nous n'avions pas pensé.
          Il ne compte pas son temps et s'implique fortement dans les projets qu'il entreprend.
          Côté personnel, c'est une personne très joyeuse, avenante et dotée d'un grand sens de l'humour. Qualités indispensables pour faire d'une relation client/développeur une réussite.
          Pour un client, c'est un combo parfait qui fait que je ne peux que recommander cette belle personne !
          Plein de succès à toi Julien ! 👋`,
      name: 'Antoine Scié',
      job: 'CTO @ Obie',
      avatar: '/antoine.png',
    },
    {
      cite: `J’ai eu la chance de travailler avec Julien à Ubigreen ainsi que pour le compte de Obie. 
      Julien est un développeur méticuleux et consciencieux qui est dévoué à son travail et qui s'assure toujours que tout est fait avec la plus grande qualité.
      Julien a démontré une grande capacité à comprendre les besoins des clients et à créer des solutions personnalisées pour répondre à leurs besoins, il cherche toujours à se mettre à la place de l’utilisateur pour proposer les meilleures solutions possibles. 
      Étant vraiment passionné de web, Julien fait une veille technologique constante ce qui le maintient à jour sur les dernières technologies et tendances dans ce domaine.
      Très sociable Julien n’aura aucun mal à s’intégrer dans votre équipe.`,
      name: 'Pierre Cicuto',
      job: 'UX/UI designer @ PeopleVox',
      avatar: '/pierre.png',
    },
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
