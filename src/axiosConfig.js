import axios from 'axios'

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true,  // Send cookies with requests
});

export const signupUser = async (email, username, password) => {
    await API.post('/register/', {email, username, password})
    .then(res => {return res.data})
    .catch(error=>{console.log(error)}) 
}
export const loginUser = async (email, password) => {
    await API.post('/login/', {email, password})
    .then(res => {console.log(res.data);return res.data})
    .catch (error=>{console.log(error)}) 
}
export const getProfile = async () => {
    await API.get('/profile/')
    .then(res =>{console.log(res.data.username);return res.data})
    .catch(error=>{console.log(error)}) 
}
export const logoutUser = async () => {
    await API.post('/logout/')
    .then(res => {console.log(res.data);return res.data})
    .catch(error=>{console.log(error)}) 
}
export const refreshToken = async () => {
    await API.post('/refresh/')
    .then(res => {console.log('tokenRefreshed');return res.data})
    .catch (error=> {console.log(error)})
}
