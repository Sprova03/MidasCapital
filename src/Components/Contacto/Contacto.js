import React from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Cards } from "./Cards";
import { Cards2 } from "./Cards2";
import style from "./Contacto.module.css";

export const Contacto = () => {
  return (
    <div>
      <BurgerMenu />
      <div className={style.Container}>
        <div className={style.Box}>
          <div className={style.BoxTitulo}>
            <h1 className={style.Titulo}>
              {" "}
              Contactanos en cualquier momento.{" "}
            </h1>
            <div className={style.Linea}></div>
          </div>
          <div className={style.ContainerCards}>
            <Cards2 />
          </div>
        </div>
      </div>
    </div>
  );
};
