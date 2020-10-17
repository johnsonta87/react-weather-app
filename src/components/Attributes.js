import React from 'react'
import { tempCelcius, tempFahrenheit } from '../utils/helpers'

export default function Attributes(props) {
  const { feels_like, pressure, humidity } = props.main;
  const { speed } = props.wind;

  return (
    <div className="weather-attributes">
      <div className="attribute-block feels-temp">
        <span className="attri-label">Feels like</span>
        <p>
          {props.tempType ? tempCelcius(feels_like) : tempFahrenheit(feels_like)}&deg;
          {props.tempType ? ' C' : ' F'}
        </p>
      </div>
      <div className="attribute-block wind-speed">
        <span className="attri-label">Wind</span>
        <p>{speed} km/j</p>
      </div>
      <div className="attribute-block pressure">
        <span className="attri-label">Pressure</span>
        <p>{pressure} mbar</p>
      </div>
      <div className="attribute-block humidity">
        <span className="attri-label">Humidity</span>
        <p>{humidity}%</p>
      </div>
    </div>
  )
}
