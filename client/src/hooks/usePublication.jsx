import {
    getPublicationRequest,
    postPublicationRequest,
    likePublicationRequest,
    deletePublicationRequest,
} from '../api/publication';
import { useReducer } from 'react';
import io from 'socket.io-client';

export const usePublication = () => {

    const socket = io('/')

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_PUBLICATIONS':
                return action.payload;
            case 'ADD_PUBLICATION':
                return [action.payload, ...state];
            case 'LIKED':
                return state.map((publication) => {
                    if (publication._id === action.payload._id) {
                        return {
                            ...publication,
                            likes: action.payload.likes,
                        };
                    }
                    return publication;
                })
            case 'DELETE': 
                return state.filter((publication) => publication._id !== action.payload)
            default:
                return state;
        }
    };

    const [publications, dispatch] = useReducer(reducer, [])

    const getPublication = async () => {
        try {
            const res = await getPublicationRequest()
            dispatch({ type: 'SET_PUBLICATIONS', payload: res.data.publications })
        } catch (error) {
            console.log(error)
        }
    }

    const createPublication = async (publication) => {
        try {
            const res = await postPublicationRequest(publication)
            socket.emit('message', res.data.savePublication)
        } catch (error) {
            console.log(error)
        }
    }

    const likePublication = async (publicationId) => {
        try {
            const res = await likePublicationRequest(publicationId)
            socket.emit('liked', res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deletePublication = async (publicationId) => {
        try {
            await deletePublicationRequest(publicationId)
            socket.emit('deleted', [])
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getPublication,
        createPublication,
        publications,
        dispatch,
        likePublication,
        deletePublication,
        socket,
    }
}