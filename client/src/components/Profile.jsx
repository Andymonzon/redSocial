import { useAuth } from '../hooks/useAuthContext';
import avatar from '../public/avatar.svg';

const Profile = () => {

    const {user} = useAuth()

    return (
        <section className="col-span-1 bg-zinc-800 w-full rounded-xl h-full max-h-full p-5">
            <div className='flex flex-col items-center gap-2'>
                <div className='relative'>
                    <img src={
                        !user.img ? avatar : user.img
                    } alt="user" className="bg-zinc-700 rounded-full w-20 h-20 object-cover" />
                    <button className='absolute -top-2 -right-2 backdrop-blur-sm bg-zinc-200/5 rounded-full px-2 py-1'><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl font-bold uppercase mb-1'>{user.username}</h2>
                    <p className='text-sm text-zinc-400'>{user.email}</p>
                </div>
            </div>
        </section>
    )
}

export { Profile }