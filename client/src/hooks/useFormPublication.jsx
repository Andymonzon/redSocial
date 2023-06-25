import { useState } from "react"
import { usePublicationContext } from './usePublicationContext';

const useFormPublication = () => {

    const [form, setForm] = useState({ publication: '' })

    const { createPublication } = usePublicationContext()

    const handleChange = (e) => {
        setForm({ publication: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPublication(form)
        setForm({ publication: '' })
    }

    return {
        handleSubmit,
        form,
        handleChange
    }

}

export { useFormPublication }