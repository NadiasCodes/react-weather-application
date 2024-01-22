import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "57t510363ca64d76cf8d437ao0eea1eb";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key={apiKey}&units=metric`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Paris</h1>

      <ul>
        <li>Monday 11:48 </li>
        <li>Rain</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="rain icon"
          />

          <span className="temperature">7</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10% </li>
            <li>Humidity: 82% </li>
            <li>Wind: 27 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
