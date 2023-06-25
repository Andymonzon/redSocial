import avatar from '../public/avatar.svg';
import { useFormPublication } from '../hooks/useFormPublication';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormPublication = () => {

    const { handleSubmit, handleChange, form, getOnlyPublication } = useFormPublication()

    const params = useParams()

    useEffect(() => {
        getOnlyPublication(params)
    }, [params])

    return (
        <>
            <div>
                <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full bg-zinc-600' />
            </div>
            <form className='w-full relative box-border' onSubmit={(e) => handleSubmit(e, params)}>
                <textarea
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e, params);
                        }
                    }}
                    onChange={handleChange} placeholder='Whats on your mind?' className="bg-zinc-900 w-full h-28 rounded-xl p-3 resize-none" name="publication" value={form.publication}></textarea>
                <button type='submit' className='absolute right-0 bottom-2 py-2 px-4'><i className="fa-sharp fa-solid fa-paper-plane"></i></button>
            </form>
        </>
    )
}

export { FormPublication }