import React from "react";
import style from "./Fotter.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import conv from "../Img/logo3.jpg";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
export const Fotter = () => {
  return (
    <>
      <div className={style.Container}>
        <div className={style.Logo}>
          <img className={style.LogoImg} src={conv} />
        </div>
        <div className={style.Box}>
          <div className={style.ContainerNos}>
            Nosotros <span>{">"}</span>
          </div>
          <div className={style.ContainerInv}>
            Inversiones <span>{">"}</span>
          </div>
          <div id="Contacto" className={style.ContainerCon}>
            Contacto <span>{">"}</span>
            <div className={style.ContainerLista}>
              <ul className={style.LitaElementos}>
                <li>Telefono: 351-2468112</li>
                <li>Direccion: xxxxxxxxxx xxxxxxx xxxxxxxx</li>
              </ul>
            </div>
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
      </div>
    </>
  );
};
