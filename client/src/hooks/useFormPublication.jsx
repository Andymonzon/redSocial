import { useState } from "react"
import { usePublicationContext } from './usePublicationContext';
import {useNavigate} from 'react-router-dom';

const useFormPublication = () => {

    const [form, setForm] = useState({ publication: '' })

    const { createPublication, getOnlyPublication: getPublication, updatePublication } = usePublicationContext()

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ publication: e.target.value })
    }

    const handleSubmit = (e, params) => {
        e.preventDefault()
        if (params.id) {
            updatePublication(params.id, form)
            navigate('/')
            setForm({ publication: '' })
        } else {
            createPublication(form)
            setForm({ publication: '' })
        }
    }

    const getOnlyPublication = async (params) => {
        if (params.id) {
            const data = await getPublication(params.id)
            const text = data.data.publication.publication
            setForm({ publication: text })
        }
    }

    return {
        handleSubmit,
        form,
        handleChange,
        setForm,
        getOnlyPublication
    }

}

export { useFormPublication }