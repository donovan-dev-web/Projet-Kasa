/**
 * Home.tsx
 * Ce fichier contiens le contenue de la page d'accueil de l'application Kasa
 */

import { HeroBanner } from '../../components/Global/HeroBanner/HeroBanner'
import bannerImage from '@/assets/Images/Img_Source_1.webp'

import { Gallery } from '../../components/Home/Gallery/Gallery'

export function Home() {
  return (
    <>
      <HeroBanner
        image={bannerImage}
        imgTextAlt="Paysage de montagnes en bord de mer"
        title={`Chez vous,\n partout et ailleurs`} // \n pour retour a la ligne mobile
      />
      <Gallery />
    </>
  )
}
