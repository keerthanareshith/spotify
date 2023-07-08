import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/Login' exact element={<Login />}></Route>
        <Route path='Signup' exact element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
