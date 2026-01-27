/**
 * Logements.tsx
 * Ce fichier definit le template des pages logements creer dynamiquement via les donner recuperer du backend.
 */

import style from './logements.module.scss'
import { useParams, Navigate } from 'react-router-dom'
import { useLogements } from '../../context/useLogements'

// component Import

import { Carrousel } from '../../components/Logements/Carrousel/Carrousel'
import { Tags } from '../../components/Logements/Tags/Tags'
import { Profil } from '../../components/Logements/Profil/Profils'
import { Rating } from '../../components/Logements/Rating/Rating'
import { Accordion } from '../../components/Global/Accordion/Accordion'

export function Logements() {
  const { id } = useParams()
  const { logements, loading } = useLogements()

  if (loading) return null

  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <Navigate to="*" replace />
  }

  return (
    <>
      <Carrousel imgRef={logement.cover} />
      <div className={style.headSection}>
        <div className={style.titleSection}>
          <h1 className={style.title}>{logement.title}</h1>
          <p className={style.location}>{logement.location}</p>
          <div className={style.tagSection}>
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className={style.profils}>
          <Profil name={logement.host.name} imgUrl={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className={style.AccordionSection}>
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={logement.equipments} />
      </div>
    </>
  )
}
