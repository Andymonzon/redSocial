import { createContext } from 'react'
import { usePublication } from '../hooks/usePublication';

export const PublicationContext = createContext()

export const PublicationContextProvider = ({ children }) => {

    const {
        publications,
        setPublications,
        createPublication,
        getPublication,
        likePublication,
        deletePublication,
        socket,
        dispatch
    } = usePublication()

    return (
        <PublicationContext.Provider value={{
            publications,
            setPublications,
            createPublication,
            getPublication,
            likePublication,
            deletePublication,
            socket,
            dispatch
        }}>
            {children}
        </PublicationContext.Provider>
    )
}