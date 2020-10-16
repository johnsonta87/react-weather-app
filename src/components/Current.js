import React, { useState } from 'react'
import moment from 'moment'
import { Button } from 'semantic-ui-react'
import WeatherIcon from './WeatherIcon'
import { tempCelcius, tempFahrenheit } from '../utils/helpers'

export default function App(props) {
  const { main, weather, wind } = props.data;
  const [tempType, setTempType] = useState(false);

  let now = moment();
  const currentDate = now.format("dddd, MMMM Do YYYY");

  const switchFahrenheit = () => {
    setTempType(false);
  }
  const switchCelcius = () => {
    setTempType(true);
  }

  return (
    <div className="current-weather-block">

      <WeatherIcon icon={weather} />
      <span className="current-date">{currentDate}</span>

      <p className="current-temp">{tempType ? tempCelcius(main.temp) : tempFahrenheit(main.temp)}&deg;</p>

      <div className="temptype-switcher">
        <Button onClick={switchFahrenheit} className={!tempType && 'active'}>Fahrenheit</Button>
        <Button onClick={switchCelcius} className={tempType && 'active'}>Celcius</Button>
      </div>

      <div className="weather-attributes">
        <div className="attribute-block feels-temp">
          <span className="attri-label">Feels like</span>
          <p>{tempType ? tempCelcius(main.feels_like) : tempFahrenheit(main.feels_like)}&deg;</p>
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
