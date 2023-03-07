import React from "react"
import "./Energy.css"
import electricityPic from "./electricity.svg"
import waterPic from "./water.svg"

let Energy = ({ electricity, water }) => {

    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={electricityPic} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={waterPic} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy