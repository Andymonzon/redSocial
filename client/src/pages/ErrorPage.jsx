import { Link, useNavigate } from "react-router-dom"

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-2">
                    <h2 className="text-7xl font-bold">Oops!</h2>
                    <div className="w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-2xl">Sorry, an unexpected error has occurred</h3>
                <i className="text-zinc-600 font-bold">404 - Page Not Found</i>
                <button onClick={handleGoBack} className="font-bold bg-black px-5 py-2 rounded-lg text-white hover:bg-zinc-700 duration-300">Go Back</button>
            </div>
        </div>
    )
}

export { ErrorPage }