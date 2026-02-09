/**
 * Gallery.tsx
 * Ce fichier contiens la logique de creation de la gallery present dans la page d'accueil
 */

import style from './gallery.module.scss'

import { Cards } from '../Cards/Cards'

import { useLogements } from '../../../context/useLogements'

export function Gallery() {
  const { logements, loading, error } = useLogements()

  if (loading) {
    return <div>Chargement...</div>
  }
  if (error) {
    return <div>Erreur : {error}</div>
  }

  return (
    <div className={style.galleryContainer}>
      {logements.map((logement) => (
        <Cards
          key={logement.id}
          title={logement.title}
          image={logement.cover}
          path={`/logement/${logement.id}`}
        />
      ))}
    </div>
  )
}
