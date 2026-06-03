import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchBox( {updateInfo} ) {
    const [city, setCity] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "bd1bf27fc293055fdac55a36705ee445";

    let getWeatherInfo = async () => {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
       

        let result = {
            city: city,
            feels_like: jsonResponse.main.feels_like,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    }

    let handleInput = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");

        //calling function
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
    }

    return(
        <form action="#">
             <TextField 
             id="outlined-basic" 
             label="City Name" 
             variant="outlined" 
             value={city}
             onChange={handleInput}/>
             <br />
             <br />

             <Button variant="outlined" 
             type="submit"
             onClick={handleSubmit}
             >
             Search
             </Button>
         </form>
    )
}