import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';

const Navbar = () => {



    return (
        <header>
            <div className='flex justify-between items-center px-10 py-3'>
                <Link to='/' className='text-4xl font-bold'>
                    MundI
                </Link>

                <nav className='flex gap-1'>
                    <ul className='flex gap-1'>
                        <li className='px-2 py-1 font-bold text-sm hover:text-cyan-500 duration-200'>
                            <Link to='/'><i className="fa-solid fa-house"></i></Link>
                        </li>
                    </ul>

                    <ProfileMenu />
                </nav>
            </div>
        </header>
    );
};

export { Navbar }
