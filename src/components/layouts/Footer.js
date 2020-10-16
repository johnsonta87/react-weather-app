import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-app">
      <p>
        <strong>Data sources:</strong> <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">openweathermap.org</a>
      </p>
      &copy; {new Date().getFullYear()} - Built by <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">@johnsonta87</a> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby React</a>.
    </footer>
  )
}
