import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <NavLink to={'/about'}>Terms & Conditions {new Date().getFullYear()}</NavLink>
    </div>
  )
}

export default Footer