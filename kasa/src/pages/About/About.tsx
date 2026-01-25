import style from './about.module.scss'

import { HeroBanner } from '../../components/Global/HeroBanner/HeroBanner'
import bannerImage from '@/assets/Images/Img_Source_2.webp'

import { Accordion } from '../../components/Global/Accordion/Accordion'

export function About() {
  return (
    <div>
      <HeroBanner
        image={bannerImage}
        imgTextAlt="Paysage de montagnes en bord de mer"
      />
      <div className={style.accordionContainer}>
        <Accordion
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Accordion
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Accordion
          title="Service"
          content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Accordion
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  )
}
