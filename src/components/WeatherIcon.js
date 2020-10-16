import React from 'react'
import Image from './Image'

export default function WeatherIcon(props) {
  const { main, description } = props.icon[0];
  const weatherIcon = `icons/${main}.png`;

  return (
    <div>
      <Image alt={main} filename={weatherIcon.toLowerCase() || 'http://via.placeholder.com/75x75'} />
      <h4 className="weather-description">{description}</h4>
    </div>
  )
}
