import styles from '../../styles/Ui.module.scss';

import Badge from "@/components/badge";
import Card from '@/components/card';

export default function Ui() {
  return (
    <div id={styles.ui}>
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
        <Card variant="bordered">bordered</Card>
      </section>

    </div>
  )
}