import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { usePublicationContext } from '../hooks/usePublicationContext';

export const useUpdatePublication = (publication) => {

    const { socket, dispatch } = usePublicationContext()

    const navigate = useNavigate()

    useEffect(() => {
        socket.on('updated', handleUpdated);
        return () => {
            socket.off('updated', handleUpdated);
        };
    }, [])

    const handleUpdated = (data) => {
        dispatch({ type: 'UPDATED', payload: data });
    };

    const eventEdit = () => {
        navigate(`/${publication._id}`)
    }

    return {
        eventEdit
    }
}
