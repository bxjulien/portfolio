import { FaAngular, FaSass } from 'react-icons/fa';
import { FaCss3Alt, FaTelegramPlane } from 'react-icons/fa';

import Badge from '@/components/badge';
import Card from '@/components/card';
import { FaHtml5 } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { SiCsharp } from 'react-icons/si';
import { SiCypress } from 'react-icons/si';
import { TbBrandFirebase } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import styles from '../styles/Linkedin.module.scss';

export default function Linkedin() {
  return (
    <div id={styles.linkedin}>
      <p>
        Hey, vous avez trouvé une page spéciale, je m'en sers pour construire
        des éléments pour mon profile Linkedin.
      </p>

      <p>Bannière Linkedin, 850 x 220</p>

      <Card style={{ width: '850px', height: '220px' }} variant='no_padding'>
        <div className={styles.banner}>
          <div className={styles.titles}>
            <h1>Développeur</h1>
            <h3>Fullstack JS</h3>
          </div>

          <div className={styles.badges}>
            <Badge variant='default'>
              <SiCypress size={25} color='black' />
              Cypress
            </Badge>
            <Badge variant='primary'>
              <TbBrandNextjs size={25} color='white' />
              Next.JS
            </Badge>

            <Badge variant='primary'>
              <FaReact size={25} color='#61DAFB' />
              React
            </Badge>

            <Badge variant='primary'>
              <FaNodeJs size={25} color='#509941' />
              Node.JS
            </Badge>

            <Badge variant='default'>
              <TbBrandFirebase size={25} color='#FFCB2B' />
              Firebase
            </Badge>
          </div>
          <div className={styles.badges}>
            <Badge variant='default'>
              <SiCsharp size={25} color='#9C75D5' />
              C#
            </Badge>
            <Badge variant='default'>
              <FiDatabase size={25} color='#DB942E' />
              SQL
            </Badge>
            <Badge variant='default'>
              <FaHtml5 size={25} color='#DD4B25' />
              HTML
            </Badge>
            <Badge variant='default'>
              <FaCss3Alt size={25} color='#254BDD' />
              CSS
            </Badge>
            <Badge variant='default'>
              <FaSass size={25} color='#C76494' />
              Sass
            </Badge>

            <Badge variant='default'>
              <FaAngular size={25} color='#D6002F' />
              Angular
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
