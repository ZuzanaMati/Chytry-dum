import React, { useState } from "react"
import "./Blinds.css"
import blindsOpen from "./blinds-open.svg"
import blindsClosed from "./blinds-closed.svg"


let Blinds = ({ state }) => {
    let [stateBlinds, setState] = useState(state)

    return (
        <div className="blinds">
            <div className="blinds__icon">
                {stateBlinds === "open" ? <img src={blindsOpen} /> : <img src={blindsClosed} />}
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={stateBlinds === "open" ? "button button--active" : "button"}
                    onClick={() => setState("open")}>Otevřeno</button>

                <button className={stateBlinds === "closed" ? "button button--active" : "button"}
                    onClick={() => setState("closed")}>Zavřeno</button>
            </div>
        </div>

    )
}

export default Blinds