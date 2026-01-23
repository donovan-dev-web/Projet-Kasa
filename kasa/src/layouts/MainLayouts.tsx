import { Outlet, Link } from 'react-router-dom'

export function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 My React App</p>
      </footer>
    </>
  )
}
