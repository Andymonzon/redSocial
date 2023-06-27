import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuthContext';
// import { ProfileMenu } from './ProfileMenu';

const Navbar = () => {

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className='flex justify-between items-center px-10 py-3'>
                <Link to='/' className='text-4xl font-bold'>
                    MundI
                </Link>

                <nav className='flex gap-1'>
                    <ul className='flex gap-1'>
                        <li className='px-2 py-1 font-bold text-sm hover:text-zinc-400 duration-200'>
                            <Link to='/'><i className="fa-solid fa-house"></i></Link>
                        </li>
                    </ul>

                    {/* <ProfileMenu /> */}

                    <div>
                        <a className='hover:text-zinc-400 duration-200' onClick={handleLogout} href='/login'>Logout</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export { Navbar }
