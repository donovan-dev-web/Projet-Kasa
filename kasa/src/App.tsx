/* Config import */
import { Routes, Route } from 'react-router-dom'

/* Page import */
import { MainLayout } from './layouts/MainLayouts.tsx'

import { Home } from './pages/Home/Home.tsx'
import { About } from './pages/About/About.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Loyout Principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
