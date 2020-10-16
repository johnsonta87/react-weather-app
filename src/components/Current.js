import React from 'react'
import moment from 'moment'
import WeatherIcon from './WeatherIcon'
import { tempDecimal } from '../utils/helpers'

export default function App(props) {
  const { main, weather, wind } = props.data;

  let now = moment();
  const currentDate = now.format("dddd, MMMM Do YYYY");

  return (
    <div className="current-weather-block">

      <WeatherIcon icon={weather} />
      <span className="current-date">{currentDate}</span>

      <p className="current-temp">{tempDecimal(main.temp)}&deg;</p>

      <div className="weather-attributes">
        <div className="attribute-block feels-temp">
          <span className="attri-label">Feels like</span>
          <p>{tempDecimal(main.feels_like)}&deg;</p>
        </div>
        <div className="attribute-block wind-speed">
          <span className="attri-label">Wind</span>
          <p>{wind.speed} km/j</p>
        </div>
        <div className="attribute-block pressure">
          <span className="attri-label">Pressure</span>
          <p>{main.pressure} mbar</p>
        </div>
        <div className="attribute-block humidity">
          <span className="attri-label">Humidity</span>
          <p>{main.humidity}%</p>
        </div>
      </div>
    </div>
  )
}
