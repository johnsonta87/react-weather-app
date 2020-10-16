import React from 'react'
import { Message } from 'semantic-ui-react'

export default function Warning() {
  return (
    <Message warning>
      <Message.Header>Error!</Message.Header>
      <p>Ensure you have entered a city name.</p>
    </Message>
  )
}
