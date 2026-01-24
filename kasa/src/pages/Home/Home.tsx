import { HeroBanner } from '../../components/Global/HeroBanner/HeroBanner'
import bannerImage from '@/assets/Images/Img_Source_1.webp'

export function Home() {
  return (
    <>
      <HeroBanner
        image={bannerImage}
        imgTextAlt="Paysage de montagnes en bord de mer"
        title={`Chez vous,\n partout et ailleurs`} // \n pour retour a la ligne mobile
      />
      <h2>Page D'accueil Kasa</h2>
    </>
  )
}
