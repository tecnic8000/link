
// import logo1 from './assets/img/logo_002.png'
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Item from './pages/Item'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Tracking from './pages/Tracking'
import Register from './pages/Register'

import ProtectedRoute from './components/ProtectedRoute'


function RegisterAndLogout() {
  localStorage.clear()
  return <Login/>
}

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path ='/profile/' element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>

        <Route path = 'register' element={ <Register /> }/>

        <Route path='/profile2/:id' element={<Profile/>}/>

        <Route path='/item/:id' element={<Item />}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
        <Route path='/tracking/:id' element={<Tracking/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Route>
      
    )
  )

  return <RouterProvider router={router}/>

  // const loggedIn1 = false;

  /*return (
    <div className='text-5xl'>
    <Navbar/>  
    {loggedIn1 ? console.log('logged--01') : console.log('guest1')} {/* loggedIN ? IF }
    App1
    <Product size="test9" category="4" brand="A" PriceRange="xxc" />
    {/*<img src={logo1}/> }
    
    </div>
    
  )*/
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