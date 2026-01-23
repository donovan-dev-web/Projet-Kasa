import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Global/Navbar/Navbar.tsx'
import { Footer } from '../components/Global/Footer/Footer.tsx'

export function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
