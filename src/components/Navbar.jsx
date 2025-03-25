import { NavLink, Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
import axios from 'axios';

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

const logout = async () => {
  try {
      await axios.post("http://127.0.0.1:8000/logout/", {}, { withCredentials: true });
      console.log("User logged out successfully");
  } catch (error) {
      console.log("Logout failed:", error.response?.data);
  }
};

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>TECNIC 8000</NavLink>

      
      <button>LOG OUT</button>


      <NavLink to='/login/'>login</NavLink>

    </nav>
  )
}

export default Navbar