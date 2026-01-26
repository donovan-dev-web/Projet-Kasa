/**
 * useLogements.ts
 * Ce fichier definit un hook personnalisé afin dappeler le Provider et recuperer les données du context.
 * Il simplifie la lecture du code evitant lutilisation de useContext dans les differents element ayant besoin des données.
 */

import { useContext } from 'react'
import { LogementContext } from './LogementContext'

export function useLogements() {
  const context = useContext(LogementContext)

  if (!context) {
    throw new Error('[useLogements] Aucun contexte trouvé. ')
  }

  return context
}
