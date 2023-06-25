import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuthContext';

const initialForm = {
    username: '',
    email: '',
    password: '',
}

export const useForm = () => {

    const [form, setForm] = useState(initialForm)
    const [placeholderUser, setPlaceholderUser] = useState(false)
    const [placeholderEmail, setPlaceholderEmail] = useState(false)
    const [placeholderPassword, setPlaceholderPassword] = useState(false)

    const { isAuthenticated, signup, signin, setError, setErrorLogin } = useAuth()
    const navigate = useNavigate()

    const location = useLocation()
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    const handleChange = (e) => {
        if (e.target.value.length > 0) {
            setError(false)
            setErrorLogin(false)
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleWrite = (e, inp) => {
        if (e.target.value.length > 0) {
            inp(true)
        } else {
            inp(false)
        }
    }

    const registerSubmit = () => {
        if (location.pathname === '/register') {
            signup(form)
            setPlaceholderUser(false)
            setPlaceholderEmail(false)
            setPlaceholderPassword(false)
        }
    }

    const loginSubmit = () => {
        if (location.pathname === '/login') {
            signin(form)
            setPlaceholderUser(false)
            setPlaceholderEmail(false)
            setPlaceholderPassword(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(initialForm)
        registerSubmit()
        loginSubmit()
    }

    return {
        handleChange,
        handleWrite,
        handleSubmit,
        form,
        placeholderEmail,
        placeholderPassword,
        placeholderUser,
        setForm,
        setPlaceholderEmail,
        setPlaceholderPassword,
        setPlaceholderUser
    }
}