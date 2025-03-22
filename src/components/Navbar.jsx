import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>TECNIC 8000</NavLink>
      <NavLink to='/login/'>login</NavLink>

    </nav>
  )
}

export default Navbar