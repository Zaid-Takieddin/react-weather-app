import React from "react";
import "./currentWeather.css";
import CircularProgress from "@mui/material/CircularProgress";

const currentWeather = ({ weather, isLoading }) => {
  if (isLoading)
    return (
      <div className="weather-card">
        <div className="spinner">
          <CircularProgress />
        </div>
      </div>
    );
  if (!isLoading)
    return (
      <div className="weather-card">
        <div className="top">
          <div>
            <div className="city">{weather.city}</div>
            <div className="weather-state">
              {weather.weather[0].description}
            </div>
          </div>
          <img alt="sunny" src={`icons/${weather.weather[0].icon}.png`} />
        </div>
        <div className="bottom">
          <div className="temperature">{Math.round(weather.main.temp)}°C</div>
          <div className="details">
            <div className="parameter-row">
              <div className="parameter-label">Feels like</div>
              <div className="parameter-value">
                {Math.round(weather.main.feels_like)} °C
              </div>
            </div>
            <div className="parameter-row">
              <div className="parameter-label">Humidity</div>
              <div className="parameter-value">
                {Math.round(weather.main.humidity)} %
              </div>
            </div>
            <div className="parameter-row">
              <div className="parameter-label">Pressure</div>
              <div className="parameter-value">
                {Math.round(weather.main.pressure)} hPa
              </div>
            </div>
            <div className="parameter-row">
              <div className="parameter-label">Wind</div>
              <div className="parameter-value">{weather.wind.speed} m/s</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default currentWeather;
