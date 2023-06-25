import { useEffect, useRef, useState } from 'react';

export const useOpenMenu = () => {

    const [open, setOpen] = useState(false) // menu from publication settings
    const [showMenu, setShowMenu] = useState(false); // menu from navbar settings

    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
                setShowMenu(false)
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openMenuPublication = () => {
        setOpen(!open)
    }

    const handleShowMenu = () => { //navbar
        setShowMenu(!showMenu);
    };

    return{
        openMenuPublication,
        handleShowMenu,
        open,
        showMenu,
        menuRef,
    }

}