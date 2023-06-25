import axios from './axios'

export const authRegister = user => axios.post(`/register`, user)

export const authLogin = user => axios.post(`/login`, user)

export const verifyToken = () => axios.get('/verify')

export const logoutRequest = () => axios.post('/logout')