import React from "react";
import style from "./Inicio.module.css";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { CarouselContainer } from "../Carrusel/CarouselContainer";
import { Api } from "../Nueva carpeta/Api";
import { Introducion } from "./Introducion";

export const Inicio = () => {
  return (
    <div className={style.Container}>
      <div className={style.Stars}></div>
      <div className={style.Stars2}></div>
      <div className={style.Stars3}></div>
      <BurgerMenu />
      <CarouselContainer />
      <div className={style.ContainerIntroduction}>
        <Api />
        <Introducion />
      </div>
    </div>
  );
};
