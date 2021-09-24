import React from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import BgContact from "../Img/bgcontact.png";

import style from "./Contacto.module.css";

export const Contacto = () => {
  return (
    <div>
      <BurgerMenu />
      <div className={style.ContainerTodo}>
        <div className={style.Container}>
          <div className={style.Titulo}>
            <h1>Contactos</h1>
          </div>
        </div>
        <div className={style.Box}>
          <div className={style.BoxTitulo}>
            <h1 className={style.TituloRedes}> NUESTRAS REDES</h1>
          </div>
          <div className={style.BoxRedes}>
            <div className={style.BoxRedesImg}>
              <img alt="bg" src={BgContact} className={style.BgContact} />
            </div>
            <ul className={style.RedesContenedor}>
              <li>
                <a className={style.LinkContacto1} href="" target="_blank">
                  <div className={style.RedCont1}>
                    <div className={style.RedTitleCont}>
                      <h3>Facebook</h3>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className={style.LinkContacto2} href="" target="_blank">
                  <div className={style.RedCont2}>
                    <div className={style.RedTitleCont}>
                      <h3>Twitter</h3>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className={style.LinkContacto3} href="" target="_blank">
                  <div className={style.RedCont3}>
                    <div className={style.RedTitleCont}>
                      <h3>Instagram</h3>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className={style.LinkContacto4} href="" target="_blank">
                  <div className={style.RedCont4}>
                    <div className={style.RedTitleCont}>
                      <h3>Gmail</h3>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className={style.LinkContacto5} href="" target="_blank">
                  <div className={style.RedCont5}>
                    <div className={style.RedTitleCont}>
                      <h3>WhatsApp</h3>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
