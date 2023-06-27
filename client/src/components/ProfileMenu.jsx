import { useAuth } from '../hooks/useAuthContext';
import { useOpenMenu } from '../hooks/useOpenMenu';

const ProfileMenu = () => {

    const { logout } = useAuth()
    const { handleShowMenu, menuRef, showMenu } = useOpenMenu()

    const handleLogout = () => {
        logout()
    }

    return (
        <div className='px-2 py-1 relative' ref={menuRef}>
            <p onClick={handleShowMenu} className='cursor-pointer font-bold text-sm hover:text-zinc-600'>
                Profile
            </p>

            <div className={showMenu ? 'flex flex-col absolute bg-slate-400 right-0 top-9 w-52 z-50' : 'hidden'}>
                <div>
                    <p>Perfil</p>
                </div>
                <div>
                    <p>Ajustes de perfil</p>
                </div>
                <div>
                    <a onClick={handleLogout} href='/login'>Logout</a>
                </div>
            </div>
        </div>
    )
}

export { ProfileMenu }