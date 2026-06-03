import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 32.22,
    humaditiy: 36,
    pressure: 1008,
    temp_max:32.45,
    temp_min: 32.45,
    temp: 32.45,
    weather: "clear sky"
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}