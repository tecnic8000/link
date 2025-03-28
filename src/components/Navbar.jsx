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
  //const [isAuthorized, setIsAuthorized] = useState(false);
  //const [user, setUser] = useState(null)
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
			const userDetails = await getProfile();
			if (userDetails) {
				setUser(userDetails);
			}
		};
		getUser();
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
  }


  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
        const res = await api.post("/api/token/refresh/", { 
            refresh: refreshToken, // send POST request to submit refreshToken to get new accessToken
        });
        if (res.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            setIsAuthorized(true)
            console.log('refresh01')
        } else {
            setIsAuthorized(false)
            console.log('refreshFailed') //
        }
    } catch (error) {
        console.log(error);
        setIsAuthorized(false);
    }
  }
  
  const auth = async () => { 
    const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            console.log('notoken')
            return;
        }
        //const tokenExpiration = jwtDecode(token).exp;
        const now = Date.now() / 1000; // <-- set to seconds
        if (jwtDecode(token).exp < now) { // if token is expired, get refresh token
          await refreshToken();
      } else {
          setIsAuthorized(true);
          console.log('loggedin')
      }
  }

  // check httpCookie sess*/
  /*const logout1 = async () => {
    try {
        await API.post("/logout/", {}, { withCredentials: true });
        //await axios.post("http://127.0.0.1:8000/api/logout/", {}, { withCredentials: true });
        console.log("User logged out successfully");
        navigate("/")
    } catch (error) {
        console.log("Logout failed:", error.response?.data);
    }
  };*/
  
  
  //console.log('localStorage:',localStorage)  
  //console.log('AUTHCHECK-',isAuthorized)
  return (
    <nav>
      <NavLink to='/'>TECNIC 8000</NavLink>
      <br/>
      <button onClick={()=>{navigate('/profile')}}>profile</button>
      <button onClick={async ()=>{await refreshToken()}}>token1</button>
      <button onClick={async ()=>{await logoutUser()}}>LOG OUT1</button>
      {/*isAuthorized ? <button>LOG OUT</button> : <NavLink to='/login/'>LOG IN</NavLink>*/}

      
      
    </nav>
  )
}

export default Navbar