import React from 'react'
import style from './BurgerMenu.module.css'
export const NavLinks = () => {
    return (
        <ul >
        <li>
            <a className={style.NavLink} href='#'>Inicio</a>
        </li>
        <li>
            <a className={style.NavLink} href='#'>Nosotros</a>
        </li>
        <li>
            <a className={style.NavLink} href='#'>Hace Negocios con Midas Capital</a>
        </li>
        <li>
            <a className={style.NavLink} href='#'>Contactanos</a>
        </li>
    </ul>
    )
}
