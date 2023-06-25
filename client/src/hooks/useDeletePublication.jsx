import { usePublicationContext } from '../hooks/usePublicationContext';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuthContext';

const useDeletePublication = (publication) => {
    const { socket, dispatch, deletePublication } = usePublicationContext()
    const { user } = useAuth()

    useEffect(() => {
        socket.on('deleted', handleDeleted);
        return () => {
            socket.off('deleted', handleDeleted);
        };
    }, []);

    const handleDeleted = (data) => {
        dispatch({ type: 'DELETE', payload: data });
    };

    const handleDelete = () => {
        if (publication.userId._id !== user.id) return
        deletePublication(publication._id);
        socket.emit('deleted', publication._id);
    };

    return {
        handleDelete
    }

}

export { useDeletePublication }