import React from 'react'
import style from './BurgerMenu.module.css'
import {motion} from 'framer-motion'


export const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    return (
        <ul >
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={style.NavLink} href='#'>Inicio</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={style.NavLink} href='#'>Nosotros</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={style.NavLink} href='#'>Hace Negocios con Midas Capital</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.50}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={style.NavLink} href='#'>Contactanos</a>
            </motion.li>
    </ul>
    )
}
