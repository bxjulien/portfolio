import styles from '../../styles/Ui.module.scss';

import Badge from "@/components/badge/Badge";
import Card from '@/components/card/Card';
import LsdBorder from '@/components/lsd_border/LsdBorder';
import Title from '@/components/title/Title';

export default function Ui() {
  return (
    <div id={styles.ui}>

      <section>
        <Title subtitle={"subtitle"}>Title</Title>
      </section>

      <section className={styles.badges}>
        <Badge variant="primary">primary</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="ternary">ternary</Badge>
        <Badge variant="warning">warning</Badge>
        <Badge variant="error">error</Badge>
        <Badge variant="default">default</Badge>
      </section>

      <section className={styles.cards}>
        <Card>classic</Card>
        <LsdBorder>lsd border</LsdBorder>
      </section>

    </div>
  )
}