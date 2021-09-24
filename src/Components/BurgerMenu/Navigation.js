import React from "react";
import { NavLinks } from "./NavLinks";
import style from "./BurgerMenu.module.css";
import conv from "../Img/logo3.jpg";

export const Navigation = () => {
  return (
    <nav className={style.Navigation}>
      <div className={style.NavLink2}>
        <img className={style.LogoImg} src={conv}></img>
      </div>
      <NavLinks />
    </nav>
  );
};
