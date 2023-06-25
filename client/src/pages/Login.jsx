import { FormLogin } from "../components/FormLogin"
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuthContext';

const Login = () => {

    const { errorLogin } = useAuth()

    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            <div className="w-1/2 p-10 rounded-xl shadow-xl bg-zinc-700 gap-10 flex flex-col">
                <h2 className="text-3xl font-bold text-center text-cyan-500">Login</h2>
                <FormLogin />
                <div>
                    {Array.isArray(errorLogin) && errorLogin.map((error, i) => <p key={i} className="text-red-500 text-center">{error}</p >)}
                </div>
                <div className="flex justify-center items-center gap-5">
                    <p>Dont have an account yet?</p>
                    <Link to="/register" className="text-cyan-500 hover:text-cyan-700">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export { Login }