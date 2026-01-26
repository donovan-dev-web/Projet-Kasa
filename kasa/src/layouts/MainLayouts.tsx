/**
 * MainLayouts.tsx
 * ce fichier contiens la structure du layout global comprenant la navbar et le footer.
 */

import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Global/Navbar/Navbar.tsx'
import { Footer } from '../components/Global/Footer/Footer.tsx'

/* Global Style import */
import '../styles/_reset.scss'
import '../styles/main.scss'

export function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="main-layout">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
