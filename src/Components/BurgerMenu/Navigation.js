import React from 'react'
import { NavLinks } from './NavLinks'
import style from './BurgerMenu.module.css'

export const Navigation = () => {
    return (
        <nav className={style.Navigation}>
          <NavLinks/>  
        </nav>
    )
}
