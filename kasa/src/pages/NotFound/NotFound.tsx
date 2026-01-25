/**
 * NotFound.tsx
 * Ce fichier contient le contenue de la page 404 de l'application Kasa
 */

import { Link } from 'react-router-dom'
import style from './notFound.module.scss'

export function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404</h1>
      <p className={style.description}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={'/'} className={style.link}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
