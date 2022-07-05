import "./App.css";
import React, { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./currentWeather/currentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Forecast from "./components/forecast/forecast";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleOnSearchChange = (searchData) => {
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(" ");
    const weatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  console.log(weather);
  console.log(forecast);

  return (
    <div className="container">
      <Search handleOnSearchChange={handleOnSearchChange} />
      {weather && <CurrentWeather isLoading={isLoading} weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
