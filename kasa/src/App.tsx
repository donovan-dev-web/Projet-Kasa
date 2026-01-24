/* Config import */
import { Routes, Route } from 'react-router-dom'

/* Page import */
import { MainLayout } from './layouts/MainLayouts.tsx'

import { Home } from './pages/Home/Home.tsx'
import { About } from './pages/About/About.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'

/* Global Style import */
import './styles/_reset.scss'
import './styles/main.scss'

function App() {
  return (
    <Routes>
      {/* Loyout Principal */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
