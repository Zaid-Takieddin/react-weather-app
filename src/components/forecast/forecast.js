import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const Forecast = ({ forecast }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      {forecast.list.map((item, index) => {
        return (
          <Accordion allowZeroExpanded>
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="forecast-item">
                    <img
                      alt="weather"
                      className="small-icon"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{item.dt_txt}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="forecast-details-grid">
                  <div className="forecast-details-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity} %</label>
                  </div>
                  <div className="forecast-details-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="forecast-details-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)} °C</label>
                  </div>
                  <div className="forecast-details-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all} %</label>
                  </div>
                  <div className="forecast-details-item">
                    <label>Wind speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="forecast-details-item">
                    <label>Sea level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default Forecast;
