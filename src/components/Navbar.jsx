import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
import axios from 'axios';

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}





const Navbar = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("currentURL--", window.location.href)
  })
  // check httpCookie sess
  const logout1 = async () => {
    try {
        await axios.post("http://127.0.0.1:8000/api/logout/", {}, { withCredentials: true });

        console.log("User logged out successfully");
        Navigate("/")
    } catch (error) {
        console.log("Logout failed:", error.response?.data);
    }
  };
  const test1 = () => {
    console.log('clicked')
    //<Navigate to="/"/>
    //Navigate("/")
  }
  console.log('localStorage:',localStorage)
  return (
    <nav>
      <NavLink to='/'>TECNIC 8000</NavLink>

      <button onClick={()=>{localStorage.clear()}}>clearLocalStorage</button>
      <button onClick={()=>{navigate('/')}}>test</button>
      <button onClick={logout1}>LOG OUT</button>


      <NavLink to='/login/'>login</NavLink>

    </nav>
  )
}

export default Navbar