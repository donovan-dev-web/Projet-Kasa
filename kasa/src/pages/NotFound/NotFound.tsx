import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to={'/'}> Retour a l'accueil</Link>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}
