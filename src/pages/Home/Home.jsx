import Banner from "../../components/Banner/Banner.jsx"
import MainHome from "./Mainhome.jsx"
import image from "../../assets/img_headerhome.png"

export default function Home() {
  return (
    <main>
      <Banner
        titleBanner={"Chez vous, partout et ailleurs"}
        imageBanner={image}
      />
      <MainHome />
    </main>
  )
}
