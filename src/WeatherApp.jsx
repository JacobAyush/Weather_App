import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bhandara",
    feelsLike: 25.26,
    humidity: 54,
    temp: 25.27,
    tempMax: 25.27,
    tempMin: 25.27,
    weather: "broken clouds",
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Jacob_Ayush</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
