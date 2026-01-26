/**
 * LogementsApi.ts
 * Ce fichier contiens la logique de l'API Rest permetant de recuperer les données du backend ou du fichier local si USE_BACKEND est faux afin d'eviter une erreur CORS.
 */
import logementsLocalData from '../assets/data/logements.json'

// Structure du type Logement
export interface Logement {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

/**
 * Config API
 * @param API_URL Url de l'api du futur Backend
 * @param USE_BACKEND false = lecture locale, true = fetch API
 */
const API_URL =''
const USE_BACKEND = false 

// -----------------------------------
// Fonction pour récupérer depuis le backend
// -----------------------------------
async function fetchLogementsFromApi(): Promise<Logement[]> {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error(
      `Erreur ${response.status} lors de la récupération des logements depuis le backend`
    )
  }
  const data: Logement[] = await response.json()
  return data
}

// -----------------------------------
// Fonction pour récupérer depuis le fichier local
// -----------------------------------
async function fetchLogementsFromLocal(): Promise<Logement[]> {
  // Simule un fetch local pour garder la même API
  return Promise.resolve(logementsLocalData as Logement[])
}

// -----------------------------------
// Fonction principale exportée pour les composants
// -----------------------------------
export async function getLogements(): Promise<Logement[]> {
  if (USE_BACKEND) {
    try {
      return await fetchLogementsFromApi()
    } catch (err) {
      console.warn(
        'Impossible de récupérer les logements depuis le backend, fallback vers le fichier local',
        err
      )
      return fetchLogementsFromLocal()
    }
  } else {
    return fetchLogementsFromLocal()
  }
}
