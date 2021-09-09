import React from "react";
import style from "./Cards.module.css";

export const Cards = () => {
  return (
    <div
      className={style.card}
      data-tilt
      data-tilt-scale="0.95"
      data-tilt-startY="40"
    >
      <div className={style.welcome}>Welcome to</div>
      <div className={style.year}>
        <span>Twenty</span>
        <span>Twenty</span>
        <span>One</span>
      </div>
    </div>
  );
};
