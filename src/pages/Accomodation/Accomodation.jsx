import MainApartment from "./Mainapartment"
import "../../scss/index.scss"

export default function Accomodation(Lodging) {
  return (
    <main>
      <MainApartment data={Lodging} />
    </main>
  )
}
