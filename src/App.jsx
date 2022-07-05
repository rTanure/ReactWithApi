import axios from 'axios'

import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

// const API_URL = "http://192.168.2.5:8080/api/"
const API_URL = "https://default-api.vercel.app/api"

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState({"message": ""})

  useEffect(()=>{
    axios.get(API_URL)
      .then(response => {
        setMessage(response.data)
      })
      .catch(error => console.log("error => " + error))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>API: {message.message}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
