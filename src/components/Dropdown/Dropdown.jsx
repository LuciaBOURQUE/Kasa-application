import { useState } from "react"
import "../../scss/index.scss"

export default function Dropwdown({ dropwdownValue, dropdownLabel, type, i }) {
  const [open, setOpen] = useState(false)

  const toggle = (i) => {
    if (open === i) {
      return setOpen(false)
    }
    setOpen(i)
  }

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={() => toggle(i)}>
        <label htmlFor="toogle">{dropdownLabel}</label>
        <svg
          className={`${open === i ? "arrowdropdown active" : "arrowdropdown"}`}
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={`${open === i ? "text active" : "text"}`}>
        {type === "paragraph" ? (
          <p>{dropwdownValue}</p>
        ) : (
          <ul>
            {dropwdownValue.map((list, index) => (
              <li key={`${list}-${index}`}>{list}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
