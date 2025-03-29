import { NavLink, Navigate, useNavigate } from 'react-router-dom';
//import { jwtDecode } from "jwt-decode";
//import api from "../api";
//import API from "../axiosConfig"
import { getProfile, refreshToken, logoutUser } from '../axiosConfig';
//import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
//import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  
  //useEffect(() => {console.log("currentURL--", window.location.href)})
  //useEffect(() => {auth().catch(() => setIsAuthorized(false))}, [])
  //useEffect(() => {checkAuth().catch(() => setIsAuthorized(false))}, [])
  /*useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/profile2/', { withCredentials: true })
      .then(response => {console.log(response.data);})
      .catch(error => {console.error(error);});
	}, []);*/
  const [user, setUser] = useState(null);
  useEffect(() => {
		const getUser = async () => {
			const userDetails = await getProfile().then(response => {console.log(response);return response});
      console.log("userDetails", userDetails);
			if (userDetails) {
				setUser(userDetails);
			}
		};
		getUser();
    //setUser(getProfile());
    console.log("user1", user);
	}, []);
  
  // check localStorage
  /*const checkAuth = async () => {
    try {
        await API.get("/check-auth/");
        return true;  // User is authenticated
    } catch (error) {
      console.log(error)
      return false; // Not authenticated
    }
  }*/
  return (
    <nav>
      <NavLink to='/'>TECNIC 8000</NavLink>
      <br/>
      <button onClick={()=>{navigate('/profile')}}>profile</button>
      <button onClick={async ()=>{await getProfile()}}>getUser</button>
      <button onClick={async ()=>{await refreshToken()}}>token1</button>
      <button onClick={async ()=>{await logoutUser()}}>LOG OUT1</button>

      <button>localLogout</button>
    </nav>
  )
}

export default Navbar