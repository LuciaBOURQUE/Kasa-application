import Banner from "../../components/Banner/Banner.jsx"
import MainAbout from "./Mainabout"
import image from "../../assets/img_headerabout.png"

export default function About() {
  return (
    <main>
      <Banner imageBanner={image} />
      <MainAbout />
    </main>
  )
}
