import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import PageAccueil from './page/PageAccueil'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PageAccueil/>
    </div>
  )
}

export default App
