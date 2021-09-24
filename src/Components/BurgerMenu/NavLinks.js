import React from "react";
import style from "./BurgerMenu.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div>
      <ul className={style.ul}>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className={style.NavLink} to="/">
            Inicio
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className={style.NavLink} to="/nosotros">
            Quiénes somos
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className={style.NavLink} href="#"></Link>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className={style.NavLink} to="">
            Inversiones
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <Link className={style.NavLink} to="/contacto">
            Contacto
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};
