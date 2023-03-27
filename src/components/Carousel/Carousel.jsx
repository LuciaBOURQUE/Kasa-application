import { useState, useEffect } from "react"
import "../../scss/index.scss"

export default function Carousel(props) {
  const [current, setCurrent] = useState(0) // On démarre notre slide par l'image 0
  const carouselPictures = props.carouselPictures // On récupère les images de l'id
  const length = carouselPictures.length // On récupère le nombre d'image (en chiffre)

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const slide = document.querySelector(".sliders")
    const number = document.querySelector(".number-image")
    if (length === 1 && number && slide) {
      slide.style.display = "none"
      number.style.display = "none"
    }
  })

  return (
    <div className="content-carousel">
      <div className="sliders">
        <svg
          onClick={prevSlide}
          className="sliders__left"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
        <svg
          onClick={nextSlide}
          className="sliders__right"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="number-image">
        {current + 1}/{length}
      </p>
      {carouselPictures.map((image, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <img
              src={image}
              alt="photos de l'appartement"
              className="picture"
            />
          )}
        </div>
      ))}
    </div>
  )
}
