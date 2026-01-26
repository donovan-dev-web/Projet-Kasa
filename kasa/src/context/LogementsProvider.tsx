/**
 * LogementsProvider.tsx
 * Ce fichier contient la logique permettant de recuperer les donners du context.
 * il stoque et renvoi les donnéees stoquer, le status (cahrger ou non via loading(true ou flase)), ainsi que les eventuelles erreurs via des state.
 */

import { useEffect, useState } from 'react'
import { LogementContext } from './LogementContext'
import { getLogements } from '../services/LogementsApi'
import type { Logement } from '../services/LogementsApi'

export function LogementsProvider({ children }: { children: React.ReactNode }) {
  const [logements, setLogements] = useState<Logement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getLogements()
      .then(setLogements)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <LogementContext.Provider value={{ logements, loading, error }}>
      {children}
    </LogementContext.Provider>
  )
}
