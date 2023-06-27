import axios from 'axios'

const PORT_SERVER = import.meta.env.VITE_PORT_SERVER

const instance = axios.create({
    baseURL: PORT_SERVER,
    withCredentials: true,
})

export default instance