import axios from 'axios'

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true,  // Send cookies with requests
});

export const signupUser = async (email, username, password) => {
    try {
        await API.post('/signup/', {email, username, password}).then(response => {return response.data})
    }
    catch (error) {console.log(error) ; throw new Error("Signup failed!");}
}

export const loginUser = async (email, password) => {
    try {
        await API.post('/login/', {email, password}).then(response => {return response.data})
    }
    catch (error) {console.log(error) ; throw new Error("Login failed!");}
}

export const getProfile = async () => {
    try {
        await API.get('/profile/').then(response => {return response.data})
    }
    catch (error) {console.log(error) ; throw new Error("GetProfile failed!");}
}

export const logoutUser = async () => {
    try {
        await API.post('/logout/', null).then(response => {return response.data})
    }
    catch (error) {console.log(error) ; throw new Error("Logout failed!");}
}

export const refreshToken = async () => {
    try {
        await API.post('/refresh/', null).then(response => {return response.data})
    }
    catch (error) {console.log(error) ; throw new Error("RefreshToken failed!");}
}

// 

/*export const getProfile = async () => {
    try {
        await API.get('/profile2/')
        .then(response => {
            console.log(response.data)
            return response.data
        })
        //return response.data;
    }
    catch (error) {
        console.log(error)
    }
    
}

export const registerUser = async (email, username, password) => {
    try {
        const response = await axios.post(`${API_URL}register/`, {email, username, password},
            {withCredentials: true}
        )
        return response.data;
    }
    catch (e) {
        throw new Error("Registration failed!");
    }

}
    


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}login/`, {email, password},
            {withCredentials: true}
        )
        return response.data;
    }
    catch (e) {
        throw new Error("Login failed!");
    }
}
    


export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}logout/`, null,
            {withCredentials: true}
        )
        return response.data;
    }
    catch (e) {
        throw new Error("Logout failed!");
    }
    
}


export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}user-info/`,
            {withCredentials: true}
        )
        return response.data;
    }
    catch (e) {
        throw new Error("Getting user failed!");
    }
    
}

export const refreshToken = async () => {
    try {
        const response = await axios.post(`${API_URL}refresh/`, null,
            {withCredentials: true}
        )
        return response.data;
    }
    catch (e) {
        throw new Error("Refreshing token failed!");
    }
    
}*/