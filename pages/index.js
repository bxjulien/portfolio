import Mesh from '@/components/mesh'
import Separator from '@/components/separator'
import Studies from '@/components/studies/Studies'
import Testimonials from '@/components/testimonials'
import Title from '@/components/title'
import Layout from '@/components/_layout'
import styles from '../styles/Home.module.scss'

const studiesSubtitle = "Mon parcours de reconversion professionnelle entrepris en 2019 à l'âge de 25 ans.";
const projectsSubtitle = "Les solutions dont je suis fier, réalisées dans le cadre de commande client ou de projet personnel.";
const contactSubtitle = "On travaille ensemble ?";

export default function Home() {
  return (
    <Layout>

      <Title tag="h2">qui suis-je ?</Title>

      <Separator letter="j" />

      <Title tag="h2" subtitle={studiesSubtitle}>etudes</Title>

      <Studies />

      <Separator letter="u" />

      <Title tag="h2" subtitle={projectsSubtitle}>travaux</Title>

      <Separator letter="l" />

      <Title tag="h2">Témoignages</Title>

      <Testimonials />

      <Separator letter="i" />

      <Title tag="h2" subtitle={contactSubtitle}>Contact</Title>

      <Separator letter="e" />
    </Layout>
  )
}