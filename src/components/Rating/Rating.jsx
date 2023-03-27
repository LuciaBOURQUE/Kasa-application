import empty from "../../assets/star-empty.png"
import full from "../../assets/star-full.png"
import "../../scss/index.scss"

export default function Rating(props) {
  const ratingValue = props.ratingValue
  let fullStars = Array.from({ length: ratingValue }, (value, index) => index)
  let emptyStars = Array.from(
    { length: 5 - ratingValue },
    (value, index) => index
  )
  // 1/ Je créer ici un tableau de la note de l'hôte en récupèrant sa valeur et son index
  // 2/ Je créer ici les étoiles manquantes en soustrayant la note de l'hôte sur une échelle de 5
  // 3/ Puis je les compile dans mon return()

  return (
    <div className="rating">
      {fullStars.map((value, index) => {
        return (
          <img
            key={`${value}-${index}`}
            alt="star"
            className="star"
            src={full}
          ></img>
        )
      })}
      {emptyStars.map((value, index) => {
        return (
          <img
            key={`${value}-${index}`}
            alt="star"
            className="star"
            src={empty}
          ></img>
        )
      })}
    </div>
  )
}
