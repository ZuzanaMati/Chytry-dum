import React, { useState } from "react"
import "./Climate.css"
import temp from "./temp.svg"

let Climate = ({ temperature, humidity }) => {
    let [initTemperature, setTemperature] = useState(temperature)

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{initTemperature}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button"
                    onClick={() => setTemperature(initTemperature + 1)}>+</button>
                <button className="button"
                    onClick={() => setTemperature(initTemperature - 1)}>-</button>
            </div>
        </div>
    )
}

export default Climate