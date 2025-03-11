import React from 'react'
import logo1 from './assets/img/logo_002.png'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element = {<HomePage/>}/>
  )
)

import Navbar from './components/Navbar';
import Product from './pages/Product';
import HomePage from './pages/HomePage';

const App = () => {

  const loggedIn1 = false;

  return (
    <div className='text-5xl'>
    <Navbar/>  
    {loggedIn1 ? console.log('logged--01') : console.log('guest1')} {/* loggedIN ? IF */}
    App1
    <Product size="test9" category="4" brand="A" PriceRange="xxc" />
    <img src={logo1}/> 
    
    </div>
    
  )
}

export default App








// DEFAULT VITE BUILD
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
}*/