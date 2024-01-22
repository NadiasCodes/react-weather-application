import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
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
            alt="rain"
          />
          7°C
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
