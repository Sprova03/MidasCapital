import React from "react";
import style from "./BurgerMenu.module.css";
import { MobileNavigation } from "./MobileNavigation";

import { Navigation } from "./Navigation";

export const BurgerMenu = () => {
  return (
    <div className={style.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
