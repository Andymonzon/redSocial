import { usePublicationContext } from '../hooks/usePublicationContext';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuthContext';


export const useLikePublication = (publication) => {

    const { likePublication, socket, dispatch } = usePublicationContext()

    const { user } = useAuth()

    const isLiked = Boolean(publication.likes[user.id])

    useEffect(() => {
        socket.on('liked', handleLiked);
        return () => {
            socket.off('liked', handleLiked);
        };
    }, []);

    const handleLiked = (data) => {
        dispatch({ type: 'LIKED', payload: data });
    };

    const handleLike = () => {
        likePublication(publication._id);
        socket.emit('like', publication._id);
    };

    return{
        handleLike,
        isLiked,

    }

}