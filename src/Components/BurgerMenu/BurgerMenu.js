import React from 'react'
import style from './BurgerMenu.module.css'
import { MobileNavigation } from './MobileNavigation'
import conv from "../Img/logo3.jpg";

import { Navigation } from './Navigation'

export const BurgerMenu = () => {
    return (
        <div className={style.NavBar}>
            <div className={style.Logo}>
            <img className={style.LogoImg} src={conv}></img></div>
           <Navigation/>
           <MobileNavigation/>
        </div>
    )
}
