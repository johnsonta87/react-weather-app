import React from 'react'
import WeatherIcon from './WeatherIcon'
import { tempCelcius, dateFormat } from '../utils/helpers'

export default function Forecast(props) {
  const { list } = props.data;

  return (
    <div className="forecast-weather-block">
      {list.filter(day =>
        day.dt_txt.endsWith("15:00:00")
      ).map(forecast =>
        <div key={forecast.dt} className="forecast-item">
          <div className="item-content text-left">
            <WeatherIcon icon={forecast.weather} />
          </div>
          <div className="item-content">
            <p>{dateFormat(forecast.dt_txt)}</p>
          </div>
          <div className="item-content text-right">
            <p>{tempCelcius(forecast.main.temp)}&deg;</p>
          </div>
        </div>
      )}
    </div>
  )
}
