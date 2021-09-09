import React, { useState } from 'react'
import { NavLinks } from './NavLinks'
import style from './BurgerMenu.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export const MobileNavigation = () => {

      const [open, setOpen] = useState (false);

      const hamburgerIcon = <CgMenuRound className={style.Burger} 
                          size='40px' color='white' 
                          onClick={() => setOpen(!open)}
                          />
        const closeIcon = <AiOutlineCloseCircle className={style.Burger} 
                          size='40px' color='white' 
                          onClick={() => setOpen(!open)}
                          />
    const closeMobileMenu = () => setOpen (false);
    return (
        <nav className={style.MobileNavigation}>
          {open ? closeIcon : hamburgerIcon}
         {open && <NavLinks isMobile={true} closeMobileMenu = {closeMobileMenu}/> }
      </nav>
    )
}
