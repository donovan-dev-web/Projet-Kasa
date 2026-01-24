import { HeroBanner } from '../../components/Global/HeroBanner/HeroBanner'
import bannerImage from '@/assets/Images/Img_Source_2.webp'

export function About() {
  return (
    <div>
      <HeroBanner
        image={bannerImage}
        imgTextAlt="Paysage de montagnes en bord de mer"
      />
      <h1>About Kasa</h1>
      <p>This is the about page of Kasa application.</p>
    </div>
  )
}
