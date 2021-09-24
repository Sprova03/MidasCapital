import React from "react";
import style from "./Fotter.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
export const Fotter = () => {
  return (
    <>
      <div className={style.Container}>
        <div className={style.ContainerNos}>
          Nosotros <span>{">"}</span>
        </div>
        <div className={style.ContainerInv}>
          Inversiones <span>{">"}</span>
        </div>
        <div className={style.ContainerCon}>
          Contacto <span>{">"}</span>
          <div className={style.ContBoxLinks}>
            <a
              href="www.facebook.com"
              target="_blank"
              className={style.BoxLinks1}
            >
              <FaFacebookSquare className={style.ContLinks} />
            </a>
            <a
              className={style.BoxLinks2}
              href="https://api.whatsapp.com/send/?phone=3513568111"
              rel="noreferrer"
              target="_blank"
            >
              <FaWhatsappSquare className={style.ContLinks} />
            </a>
            <a
              className={style.BoxLinks3}
              href="www.twiter.com"
              target="_blank"
            >
              <AiFillTwitterCircle className={style.ContLinks} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
