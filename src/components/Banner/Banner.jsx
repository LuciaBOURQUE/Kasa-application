import "../../scss/index.scss"

export default function Banner({ titleBanner, imageBanner }) {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={imageBanner}
        alt="arrière-plan de banner"
      />
      <h1 className="banner__title">{titleBanner}</h1>
    </div>
  )
}
