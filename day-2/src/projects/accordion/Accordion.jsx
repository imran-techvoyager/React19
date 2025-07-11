import { useState } from "react"
import "./index.css";

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <p>{isActive ? "-" : "+"}</p>
        </div>

        <div className="content">
            {isActive && <p>{content}</p>}
        </div>
    </section>
  )
}

export default Accordion