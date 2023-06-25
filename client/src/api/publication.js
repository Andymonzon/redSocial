import axios from './axios'

export const getPublicationRequest = () => axios.get("/publication")

export const getOnlyPublicationRequest = (id) => axios.get(`/publication/${id}`)

export const postPublicationRequest = (publication) => axios.post("/publication", publication)

export const updatePublicationRequest = (id, data) => axios.put(`/publication/${id}`, data)

export const likePublicationRequest = (id) => axios.put(`/publication/${id}/likes`)

export const deletePublicationRequest = (id) => axios.delete(`/publication/${id}`)