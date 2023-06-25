import { createContext, useEffect, useState } from 'react';
import { authRegister, authLogin, verifyToken, logoutRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const authContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const [errorLogin, setErrorLogin] = useState(null);

    const signup = async (userInfo) => {
        try {
            const res = await authRegister(userInfo)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (err) {
            console.log(err);
            setError(err.response.data[0])
        }
    }

    const signin = async (userInfo) => {
        try {
            const res = await authLogin(userInfo)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            console.log(error)
            setErrorLogin(error.response.data[0])
        }
    }

    const logout = async () => {
        try {
            await logoutRequest()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (error || errorLogin) {
            const timer = setTimeout(() => {
                setError(null)
                setErrorLogin(null)
            }, 5000)
            return () => clearInterval(timer)
        }
    }, [error, setError])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get()
            if (cookies.token) {
                try {
                    const res = await verifyToken(cookies.token)

                    if (!res.data) setIsAuthenticated(false)

                    setIsAuthenticated(true)
                    setUser(res.data)
                } catch (error) {
                    setIsAuthenticated(false)
                    setUser(null)
                    console.log(error)
                }
            }
        }
        checkLogin()
    }, [])

    return (
        <authContext.Provider value={{ signup, signin, isAuthenticated, error, setError, errorLogin, setErrorLogin, user, logout }}>
            {children}
        </authContext.Provider>
    )
}