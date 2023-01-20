import useVisible from 'hooks/useVisible';
import { GiRunningShoe } from 'react-icons/gi';
import styles from './About.module.scss';

export default function About() {
  const [ref, isVisible] = useVisible();

  return (
    <section className={styles.about}>
      <p ref={ref} className={isVisible ? styles.visible : ''}>
        Je suis un développeur passioné de <code>28 ans</code> basé à Toulouse.
        <br />
        J'aime designer, concevoir et développer des applications
        numériques afin de résoudre des problèmes de la vie courante.
        <br />
        Je travaille depuis <code>3 ans chez Ubigreen</code> en tant qu'alternant développeur web fullstack.
        Cette alternance me permet d'obtenir <code>diplôme d'ingénieur en informatique</code> dans l'école <code>Epitech</code>.
        <br />
        Je tiens aussi le rôle de <code>concepteur développeur</code> sur l'application web <code>Obie</code> depuis bientôt 1 an,
        une commande client qui verra le jour prochainement.
        <br />
        Quand je suis déconnecté, je passe mon temps dans la nature à m'entrainer pour mes futures comptétions de trail. 👟
      </p>
    </section>
  );
}