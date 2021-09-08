import React from 'react'
import { NavLinks } from './NavLinks'
import style from './BurgerMenu.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

export const MobileNavigation = () => {
    return (
        <nav className={style.MobileNavigation}>
        <GiHamburgerMenu className={style.Burger} size='40px' color='white' />
        <NavLinks/>  
      </nav>
    )
}
