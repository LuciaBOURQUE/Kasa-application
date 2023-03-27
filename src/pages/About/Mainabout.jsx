import { Instruction } from "../../datas/instruction"
import Dropwdown from "../../components/Dropdown/Dropdown"
import "../../scss/index.scss"

export default function MainAbout() {
  return (
    <section className="content-about">
      {Instruction.map((instruction) => (
        <Dropwdown
          key={instruction.id}
          dropwdownValue={instruction.description}
          dropdownLabel={instruction.title}
          type={"paragraph"}
        />
      ))}
    </section>
  )
}
