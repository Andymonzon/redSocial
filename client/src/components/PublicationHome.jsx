import { usePublicationContext } from '../hooks/usePublicationContext';
import { CardPublication } from './CardPublication';
import { FormPublication } from './FormPublication';
import { useEffect } from 'react';

const PublicationHome = () => {

    const { publications, getPublication, socket, dispatch } = usePublicationContext()

    useEffect(() => {
        getPublication()
        socket.on('message', message => {
            dispatch({ type: 'ADD_PUBLICATION', payload: message })
        })
        return () => {
            socket.off('message')
        }
    }, [])

    return (
        <section className='flex flex-col col-span-4 w-full'>
            <div className='flex gap-4 bg-zinc-800 p-4 rounded-xl'>
                <FormPublication />
            </div>

            <div className='flex flex-col gap-5 my-5'>
                {
                    publications.map(publication => (
                        <CardPublication publication={publication} key={publication._id} />
                    ))
                }
            </div>
        </section>
    )
}

export { PublicationHome }