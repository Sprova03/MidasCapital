import React from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { CarouselContainer } from "../Carrusel/CarouselContainer";

export const InicioScreen = () => {
  return (
    <>
      <BurgerMenu />
      <CarouselContainer />
      <div>
        <div>Cryptos</div>
        <div>Btc: 45k</div>
        <div>Eth: 45k</div>
        <div>Ada: 45k</div>
      </div>
    </>
  );
};
