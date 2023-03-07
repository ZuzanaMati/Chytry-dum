import React, { useState } from "react"
import "./Light.css"
import lightOn from "./light-on.svg"
import lightOff from "./light-off.svg"

let Light = ({ name, state }) => {
    let [initState, setState] = useState(state)

    return (
        <div
            className="light"
            onClick={() => setState(initState === "on" ? "off" : "on")}>

            <div className="light__icon">
                {initState === "on" ? < img src={lightOn} /> : <img src={lightOff} />}
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>

    )
}

export default Light