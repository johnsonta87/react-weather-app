import React, { useState } from 'react'
import Current from './Current';
import { Form, Input, Button } from 'semantic-ui-react'

import { fetchCurrentWeather } from '../api/services'
import Warning from './Warning';

export default function Weather() {
  const [city, setCity] = useState();
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(true);
  const [forecast14, setForecast14] = useState(false);
  const [warning, setWarning] = useState(false);

  const onChange = (event) => {
    setCity(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (city) {
      fetchCurrentWeather(city).then(res => {
        console.log(res.data)
        setWarning(false);
        setData(res.data);
      }).catch(error => {
        console.log(error)
      });
    } else {
      setWarning(true);
    }
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
            <Button onClick={() => setCurrent(true)}>Current</Button>
            <Button onClick={() => setForecast14(true)}>14 Days</Button>
          </div>
          {current && <Current data={data} />}
        </React.Fragment>
        : ''
      }
      {warning && <Warning />}

    </div>
  )
}
