import { Link } from "react-router-dom"
import { Lodging } from "../../datas/lodging"
import "../../scss/index.scss"

export default function Card() {
  return (
    <div className="apartement-list">
      {Lodging.map((apartment) => (
        <Link
          key={apartment.id}
          to={`/accomodation/${apartment.id}`}
          className="card-apartement"
        >
          <img
            className="apartement__picture"
            src={apartment.cover}
            alt={apartment.title}
          />
          <p className="apartement__title">{apartment.title}</p>
        </Link>
      ))}
    </div>
  )
}
