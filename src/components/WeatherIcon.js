import React from 'react'
import ImageTag from './ImageTag'

export default function WeatherIcon(props) {
  const { main } = props.icon[0];
  const weatherIcon = `icons/${main}.png`;

  return (
    <ImageTag alt={main} filename={weatherIcon.toLowerCase() || 'http://via.placeholder.com/75x75'} />
  )
}
