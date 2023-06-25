import { useContext } from 'react';
import { PublicationContext } from '../context/PublicationContext';

export const usePublicationContext = () => {
    const context = useContext(PublicationContext)

    if (!context) {
        throw new Error('usePublicationContext must be used within an PublicationContextProvider');
    }

    return context
}