
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

function App () {

  

  function RegisterAndLogout() {
    localStorage.clear()
    return <Login/>
  }
  
  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path ='/profile/' element={ <Profile/> }/>

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





