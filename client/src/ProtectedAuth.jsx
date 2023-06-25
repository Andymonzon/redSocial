import { useAuth } from "./hooks/useAuthContext"
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAuth = () => {

    const { user, isAuthenticated } = useAuth()

    if (!isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />
}

export { ProtectedAuth }