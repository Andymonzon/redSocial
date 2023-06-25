import { useForm } from '../hooks/useForm';

const FormRegister = () => {

    const {
        form,
        placeholderEmail,
        placeholderPassword,
        placeholderUser,
        handleChange,
        handleSubmit,
        handleWrite,
        setPlaceholderEmail,
        setPlaceholderPassword,
        setPlaceholderUser
    } = useForm()


    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
                <input autoComplete='off' required type="text" id="userName" className="border rounded-md w-full py-[0.5rem] px-3 peer focus:outline-cyan-500 duration-200 bg-zinc-700" onChange={(e) => { handleWrite(e, setPlaceholderUser); handleChange(e) }} name="username" value={form.username} />
                <label className={placeholderUser ?
                    "absolute top-[8px] left-3 -translate-y-[15px] text-xs duration-200 px-2 peer-focus:text-cyan-500 peer-focus-within:text-black bg-zinc-700"
                    :
                    "absolute top-[8px] left-3 bg-zinc-700 peer-focus:-translate-y-[15px] peer-focus:text-cyan-500 peer-focus:text-xs peer-focus:px-2 duration-200"} htmlFor="userName" placeholder=" ">User name</label>
            </div>
            <div className="relative">
                <input autoComplete='off' required type="email" id="email" className="border rounded-md w-full py-[0.5rem] px-3 peer focus:outline-cyan-500 duration-200 bg-zinc-700" onChange={(e) => { handleWrite(e, setPlaceholderEmail); handleChange(e) }} name="email" value={form.email} />
                <label className={placeholderEmail ?
                    "absolute top-[8px] left-3 -translate-y-[15px] text-xs duration-200 px-2 peer-focus:text-cyan-500 peer-focus-within:text-black bg-zinc-700"
                    :
                    "absolute top-[8px] left-3 bg-zinc-700 peer-focus:-translate-y-[15px] peer-focus:text-cyan-500 peer-focus:text-xs peer-focus:px-2 duration-200"} htmlFor="email" placeholder=" ">Email</label>
            </div>
            <div className="relative">
                <input autoComplete='off' required type="password" id="password" className="border rounded-md w-full py-[0.5rem] px-3 peer focus:outline-cyan-500 duration-200 bg-zinc-700" onChange={(e) => { handleWrite(e, setPlaceholderPassword); handleChange(e) }} name="password" value={form.password} />
                <label className={placeholderPassword ?
                    "absolute top-[8px] left-3 -translate-y-[15px] text-xs duration-200 px-2 peer-focus:text-cyan-500 peer-focus-within:text-black bg-zinc-700"
                    :
                    "absolute top-[8px] left-3 bg-zinc-700 peer-focus:-translate-y-[15px] peer-focus:text-cyan-500 peer-focus:text-xs peer-focus:px-2 duration-200"} htmlFor="password" placeholder=" ">Password</label>
            </div>
            <button type="submit" className="rounded-md bg-cyan-500 py-2 px-5 text-white duration-200 hover:bg-cyan-600">Submit</button>
        </form>
    )
}

export { FormRegister }