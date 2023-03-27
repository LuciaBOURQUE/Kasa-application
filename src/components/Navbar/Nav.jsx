import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "../../scss/index.scss"

export default function Nav(i) {
  const [currentPage, setCurrentPage] = useState(false)
  const active = (i) => {
    if (currentPage === i) {
      return setCurrentPage(false)
    }
    setCurrentPage(i)
  }

  return (
    <header>
      <nav className="nav">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
        <ul className="nav__item">
          <li>
            <NavLink to="/" onClick={() => active(i)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => active(i)}
              className={`${currentPage === i ? "link active" : " "}`}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
