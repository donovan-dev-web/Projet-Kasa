/**
 * App.tsx
 * Ce fichier est le fichier central de l'application comprenant les differentes routes,
 */

/* Import des Routes */
import { Routes, Route } from 'react-router-dom'

/* Layouts */
import { MainLayout } from './layouts/MainLayouts'

/* Pages */
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Logements } from './pages/Logements/Logements'
import { NotFound } from './pages/NotFound/NotFound'

/* Context */
import { LogementsProvider } from './context/LogementsProvider'
import { Outlet } from 'react-router-dom'

/**
 * Wrapper pour le LogementsProvider.
 * permet d'imbriquer uniquement les routes utilisant les données du provider
 * evite d'englober l'ensemble de l'application dans le provider et fournir le context a des pages qui n'en on pas l'utilité.
 */
function LogementsProviderWrapper() {
  return (
    <LogementsProvider>
      <Outlet />{' '}
    </LogementsProvider>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Layout global */}
        <Route element={<MainLayout />}>
          {/* Wrapper des Routes utilisant le context pour les logemnts */}
          <Route element={<LogementsProviderWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logements />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
