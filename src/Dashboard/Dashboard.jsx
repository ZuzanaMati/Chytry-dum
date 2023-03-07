import React from "react"
import "./Dashboard.css"
import Lights from "../Lights/Lights.jsx"
import Climate from "../Climate/Climate.jsx"
import Blinds from "../Blinds/Blinds.jsx"
import Energy from "../Energy/Energy.jsx"

let Dashboard = ({ data }) => {

    return (
        <main className="dashboard">
            <Lights lights={data.lights} />
            <Climate
                temperature={data.climate.temperature}
                humidity={data.climate.humidity} />
            <Blinds state={data.blinds} />
            <Energy
                electricity={data.energyConsumption.electricity}
                water={data.energyConsumption.water} />
        </main>
    )
}

export default Dashboard
