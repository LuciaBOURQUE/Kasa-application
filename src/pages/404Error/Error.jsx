import { Link } from "react-router-dom"
import Home from "../Home/Home"
import "../../scss/index.scss"

export default function Error404() {
  return (
    <main className="error-content">
      <div>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <Link to={<Home />} className="btn-home">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}
