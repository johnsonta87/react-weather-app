import React, { useState } from 'react'
import moment from 'moment'
import { Button } from 'semantic-ui-react'
import WeatherIcon from './WeatherIcon'
import { tempCelcius, tempFahrenheit } from '../utils/helpers'
import Attributes from './Attributes'

export default function App(props) {
  const { main, weather, wind } = props.data;
  const [tempType, setTempType] = useState(true);

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
      <h4 className="weather-description">{weather[0].description}</h4>
      <span className="current-date">{currentDate}</span>

      <p className="current-temp">
        {tempType ? tempCelcius(main.temp) : tempFahrenheit(main.temp)}&deg;
        {tempType ? ' C' : ' F'}
      </p>

      <div className="temptype-switcher">
        <Button onClick={switchFahrenheit} className={!tempType && 'active'}>Fahrenheit</Button>
        <Button onClick={switchCelcius} className={tempType && 'active'}>Celcius</Button>
      </div>

      <Attributes tempType={tempType} main={main} wind={wind} />
    </div>
  )
}
