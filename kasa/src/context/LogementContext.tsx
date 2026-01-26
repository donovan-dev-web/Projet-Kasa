/**
 * LogementContext.tsx
 * Ce fichier permet de creer le context qui stoquera les donner recuperer depuis l'API et
 * permettra le transfert des données aux autres composant sans avoir a passer les données via les props.
 */

import { createContext } from 'react'
import type { Logement } from '../services/LogementsApi'

export interface LogementContextType {
  logements: Logement[]
  loading: boolean
  error: string | null
}

export const LogementContext = createContext<LogementContextType | undefined>(
  undefined,
)
