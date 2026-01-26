/**
 * Logements.tsx
 * Ce fichier definit le template des pages logements creer dynamiquement via les donner recuperer du backend.
 */

import { useParams, Navigate } from 'react-router-dom'
import { useLogements } from '../../context/useLogements'

export function Logements() {
  const { id } = useParams()
  const { logements, loading } = useLogements()

  if (loading) return null

  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <Navigate to="*" replace />
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
  )
}
