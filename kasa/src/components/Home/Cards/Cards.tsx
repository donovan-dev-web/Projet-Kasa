/**
 * Cards.tsx
 * Ce fichier definit les Cards utiliser dans la gallery de la page d'accueil.
 */

import style from './cards.module.scss'
import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  path: string
  image: string
}

export function Cards({ title, path, image }: CardProps) {
  return (
    <div className={style.cardContainer}>
      <Link to={path} className={style.cardLink}>
        <img src={image} alt={title} className={style.cardImage} />
        <div className={style.cardOverlay}></div>
        <h3 className={style.cardTitle}>{title}</h3>
      </Link>
    </div>
  )
}
