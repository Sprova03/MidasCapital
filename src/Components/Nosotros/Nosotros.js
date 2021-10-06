import React, { useEffect } from "react";
import style from "./Nosotros2.module.css";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import Negocio from "../Img/i6.png";
import Liderazgo from "../Img/i5.png";
import Historia from "../Img/i1.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Nosotros2 = () => {
  useEffect(() => {
    Aos.init({ duration: 50000 });
  }, []);

  return (
    <div className={style.Cuerpo}>
      <div className={style.Stars}></div>
      <div className={style.Stars2}></div>
      <div className={style.Stars3}></div>
      <BurgerMenu />
      <div className={style.SeccionContactos}>
        <div className={style.Contenedor}>
          <div data-aos="fade-down" className={style.SeccionTitulo}>
            <p> Te contamos </p>
            <b>
              <div className={style.TitulosInternos}>
                Sobre Nosotros. <br />
                Nuestra Historia.
                <br />
                Nuestro Liderazgo.
                <br />
                Nuestros Principios.
              </div>
            </b>
          </div>

          <div className={style.SeccionImg}>
            <div className={style.ContenidoImg4}>
              <div className={style.ContenidoImg2}>
                <div
                  data-aos-offset="100"
                  data-aos="fade-up"
                  className={style.Img}
                >
                  <img className={style.Imagenes} src={Liderazgo} />
                </div>
                <div
                  data-aos-offset="100"
                  data-aos="fade-down"
                  className={style.Parrafos}
                >
                  <h2>Liderazgo:</h2>
                  <p>
                    {" "}
                    “El interés del cliente esta primero” “ayudamos al cliente a
                    construir un futuro mejor”- “somos implacables”- “somos
                    estudiantes de por vida” “estamos profundamente
                    comprometidos con el interés y el futuro del cliente.
                    Asimismo estamos igualmente comprometidos con el éxito de la
                    empresa; es por ello que actuamos con altos estándares de
                    excelencia”-
                  </p>
                </div>
              </div>
              <div className={style.ContenidoImg3}>
                <div data-aos="fade-up" className={style.Img}>
                  <img className={style.Imagenes} src={Historia} />
                </div>
                <div data-aos="fade-right" className={style.Parrafos}>
                  <h2>Historia:</h2>
                  <p>
                    {" "}
                    “El interés del cliente esta primero” “ayudamos al cliente a
                    construir un futuro mejor”- “somos implacables”- “somos
                    estudiantes de por vida” “estamos profundamente
                    comprometidos con el interés y el futuro del cliente.
                    Asimismo estamos igualmente comprometidos con el éxito de la
                    empresa; es por ello que actuamos con altos estándares de
                    excelencia”-
                  </p>
                </div>
              </div>
            </div>

            <div className={style.ContenidoImg1}>
              <div data-aos="fade-up" className={style.Img}>
                <img className={style.Imagenes} src={Negocio} />
              </div>
              <div data-aos="fade-down" className={style.Parrafos}>
                <h2>Principios:</h2>
                <p>
                  {" "}
                  “El interés del cliente esta primero” “ayudamos al cliente a
                  construir un futuro mejor”- “somos implacables”- “somos
                  estudiantes de por vida” “estamos profundamente comprometidos
                  con el interés y el futuro del cliente. Asimismo estamos
                  igualmente comprometidos con el éxito de la empresa; es por
                  ello que actuamos con altos estándares de excelencia”-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
