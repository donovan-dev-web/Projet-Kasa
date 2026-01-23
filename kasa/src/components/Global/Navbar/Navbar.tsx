/**
 * Navbar.tsx
 * Ce fichier contient le composant de la barre de navigation de l'application Kasa
 */

/* Style module import */
import style from './navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import Logo from '@/assets/Logo/Logo_Kasa_C.webp'

export function Navbar() {
  return (
    <header>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Link to="/">
            <img src={Logo} alt="Kasa logo couleur" />
          </Link>
        </div>

        <ul className={style.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${style.navItem} ${isActive ? style.active : ''}`
              }
              end
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${style.navItem} ${isActive ? style.active : ''}`
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
