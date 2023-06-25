import { FormRegister } from "../components/FormRegister"
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuthContext";

const Register = () => {

    const { error } = useAuth()

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/2 p-10 rounded-xl shadow-xl bg-zinc-700 gap-10 flex flex-col">
                <h2 className="text-3xl font-bold text-center text-cyan-500">Register</h2>
                <FormRegister />
                <div>
                    {Array.isArray(error) && error.map((error, i) => <p key={i} className="text-red-500 text-center">{error}</p >)}
                </div>
                <div className="flex justify-center items-center gap-5">
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-cyan-500 hover:text-cyan-700">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export { Register }