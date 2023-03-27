import { Lodging } from "../../datas/lodging"
import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"
import Tag from "../../components/Tag/Tag"
import Rating from "../../components/Rating/Rating"
import Dropwdown from "../../components/Dropdown/Dropdown"
import "../../scss/index.scss"

export default function MainApartment() {
  const { id } = useParams()

  return (
    <div className="content-apartment">
      {Lodging.filter((apartment) => apartment.id === id).map((apartment) => (
        <div key={apartment.id} className="main-info">
          <Carousel carouselPictures={apartment.pictures} />

          <div className="content-info">
            <div className="title-tag">
              <div className="info">
                <h2 className="info__title">{apartment.title}</h2>
                <p className="info__location">{apartment.location}</p>
              </div>
              <Tag tagValue={apartment.tags} />
            </div>

            <div className="note-profil">
              <div className="profil">
                <div className="profil__name">
                  <p className="name">{apartment.host.name.split(" ")[0]}</p>
                  <p className="name">{apartment.host.name.split(" ")[1]}</p>
                </div>
                <img
                  className="profil__picture"
                  src={apartment.host.picture}
                  alt={apartment.host.name}
                />
              </div>
              <Rating ratingValue={apartment.rating} />
            </div>
          </div>

          <div className="content-dropdown">
            <Dropwdown
              dropwdownValue={apartment.description}
              dropdownLabel={"Description"}
              type={"paragraph"}
            />
            <Dropwdown
              dropwdownValue={apartment.equipments}
              dropdownLabel={"Equipments"}
              type={"list"}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
