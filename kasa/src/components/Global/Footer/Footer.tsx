/**
 * Footer.tsx
 * Ce fichier contient le composant du pied de page de l'application Kasa
 */

import { Link } from 'react-router-dom'

/* Style module import */
import style from './footer.module.scss'
import Logo from '@/assets/Logo/Logo_Kasa_WB.webp'

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Link to="/">
          <img src={Logo} alt="Kasa logo blanc" />
        </Link>
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
