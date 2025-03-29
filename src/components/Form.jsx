import { useState } from "react";
//import api from "../api";
import { loginUser, signupUser } from '../axiosConfig'

import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
//import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        if (method === 'login'){
            await loginUser(username, password)
            .catch (error=>{console.log(error)}) 
            .finally(setLoading(false))
        } else {
            try {
                await signupUser(username,'trontest3', password)
                console.log('registered')
                //return navigate("/login");
            } catch (error) {
                console.log(error)
                return false
            } finally {
                setLoading(false)
            }
        }


    }

    /*const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };*/

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button type="submit">{name}</button>
        </form>
    );
}

export default Form