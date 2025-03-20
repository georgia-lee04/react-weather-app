import React from "react";

export default function Main() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "scattered clouds",
    humidity: 80,
    wind: 6,
  };
  return (
    <main>
      <div className="weather-app-data">
        <div>
          <h1>{weatherData.city}</h1>
          <p className="weather-app-details">
            <span>{weatherData.date}</span>,{" "}
            <span>{weatherData.description}</span>
            <br />
            Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
            <strong>{weatherData.wind} km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div></div>
          <div className="weather-app-temperature"></div>{" "}
          <div className="weather-app-unit">{weatherData.temperature}°C </div>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </main>
  );
}
