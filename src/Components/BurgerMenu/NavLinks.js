import React from "react";
import style from "./BurgerMenu.module.css";
import { motion } from "framer-motion";
import conv from "../Img/logo3.jpg";

export const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className={style.NavLink} href="#">
          Inicio
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className={style.NavLink} href="#">
          Quiénes somos
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className={style.NavLink} href="#">
          <div className={style.NavLink}>
            <img className={style.LogoImg} src={conv}></img>
          </div>
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className={style.NavLink} href="#">
          Inversiones
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className={style.NavLink} href="#">
          Contacto
        </a>
      </motion.li>
    </ul>
  );
};
