import React, { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { fetchCurrentWeather, fetchForecastWeather } from '../api/services'

import Current from './Current';
import Forecast from './Forecast'
import Warning from './Warning';

export default function Weather() {
  const [city, setCity] = useState();
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [current, setCurrent] = useState(true);
  const [forecast, setForecast] = useState(false);
  const [warning, setWarning] = useState(false);

  const onChange = (event) => {
    setCity(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    // fetches current weather data
    if (city) {
      fetchCurrentWeather(city).then(res => {
        setWarning(false);
        setData(res.data);
      }).catch(error => {
        console.log(error)
      });
    } else {
      setWarning(true);
    }

    // fetches forecast weather data
    if (city) {
      fetchForecastWeather(city).then(res => {
        setWarning(false);
        setForecastData(res.data);
        console.log(res.data);
      }).catch(error => {
        console.log(error)
      });
    } else {
      setWarning(true);
    }
  }

  const handleCurrent = () => {
    setCurrent(true);
    setForecast(false);
  }

  const handleForecast = () => {
    setForecast(true);
    setCurrent(false);
  }

  return (
    <div className="app-wrapper">
      <Form onSubmit={onSubmit} className="app-form">
        <Form.Field>
          <Input type="text" onChange={onChange} placeholder='Enter city name' />
        </Form.Field>
        <Button type="submit" primary>Submit</Button>
      </Form>

      {data ?
        <React.Fragment>
          <div className="forecast-options">
            <Button onClick={handleCurrent} className={current && 'active'}>Current</Button>
            <Button onClick={handleForecast} className={forecast && 'active'}>7 Days</Button>
          </div>
          {current && <Current data={data} />}
          {forecast && <Forecast data={forecastData} />}
        </React.Fragment>
        : ''
      }
      {warning && <Warning />}

    </div>
  )
}
