import axios from "axios"


axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`

export const getMovies = async () => {
    const response = await axios.get("/movies")
    return response.data
}

export const register = async (email: string, password: string) => {
    const response = await axios.post('/register', {email, password})

    if(response.statusText !== "OK"){
        throw new Error("Failed to register")
    }

    return response
}

export const login = async (email: string, password: string) => {
    const response = await axios.post('/login', {email, password})

    if(response.statusText !== "OK"){
        throw new Error("Failed to authenticate")
    }
    return response
}