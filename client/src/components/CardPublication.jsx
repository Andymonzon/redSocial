import avatar from '../public/avatar.svg';
import { useOpenMenu } from '../hooks/useOpenMenu';
import { useLikePublication } from '../hooks/useLikePublication';
import { useDeletePublication } from '../hooks/useDeletePublication';
import { useAuth } from '../hooks/useAuthContext';

const CardPublication = ({ publication }) => {

    const { openMenuPublication, open, menuRef } = useOpenMenu()
    const { handleLike, isLiked } = useLikePublication(publication)
    const { handleDelete } = useDeletePublication(publication)
    const { user } = useAuth()

    return (
        <div className='flex flex-col bg-zinc-800 rounded-xl p-4 gap-3 w-full'>
            <div className='flex flex-col rounded-md gap-2'>
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={avatar} alt="avatar" className='w-8 h-8 rounded-full bg-zinc-600' />
                        <h3 className='text-sm font-bold text-zinc-400'>{publication.userId.username}</h3>
                    </div>
                    <div className='flex items-center gap-5' ref={menuRef}>
                        <p className='text-xs text-zinc-400'>{publication.updatedAt}</p>
                        {publication.userId._id === user.id ?
                            <div className='relative'>
                                <button className='p-1' onClick={openMenuPublication}><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                {
                                    open &&
                                    <div className='flex flex-col bg-zinc-700 absolute right-0 rounded-xl top-8 p-2 items-start gap-2'>
                                        <button className='hover:text-zinc-300'>editar</button>
                                        <button onClick={handleDelete} className='hover:text-zinc-300'>eliminar</button>
                                    </div>
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                </header>
                <div>
                    <h2 className='text-2xl'>{publication.publication}</h2>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <button onClick={handleLike} className='text-xs text-zinc-400'>{isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>} {Object.keys(publication.likes).length}</button>
                </div>
                <div>
                    <button className='text-xs text-zinc-400'><i className="fa-solid fa-comment"></i> {publication.comments.length}</button>
                </div>
            </div>
        </div>
    )
}

export { CardPublication }