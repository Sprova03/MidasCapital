import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import style from "./Inicio.module.css";
import introImg from "../Img/intro.jpg";
import introImg2 from "../Img/intro2.jpg";
import introImg3 from "../Img/intro3.jpg";

export const Introducion = () => {
  useEffect(() => {
    Aos.init({ duration: 50000 });
  }, []);
  return (
    <>
      <div className={style.ContainerIntro}>
        <div className={style.ContainerImg}>
          <img data-aos="fade-up" src={introImg} className={style.ImgIntro} />
        </div>
        <div data-aos="fade-left" className={style.ContainerIntroduc}>
          <h1>Porque Invertir con Nosotros?</h1>
          <p>
            Somos una compañía que esta creciendo rapidamente, integrada por
            personal rosponsables e instruidas en el Gran Mundo de la inversion
            de capitales.
          </p>
          <p>
            Conoce mas de <Link>Nosotros y esta gran Compañía</Link>.
          </p>
        </div>
      </div>
      <div className={style.ContainerIntro}>
        <div className={style.ContainerImg2}>
          <img data-aos="fade-up" src={introImg2} className={style.ImgIntro} />
        </div>
        <div data-aos="fade-right" className={style.ContainerIntroduc2}>
          <h1>Porque Invertir con Nosotros?</h1>
          <p>
            Somos una compañía que esta creciendo rapidamente, integrada por
            personal rosponsables e instruidas en el Gran Mundo de la inversion
            de capitales.
          </p>
          <p>
            Conoce mas de <Link>Nosotros y esta gran Compañía</Link>.
          </p>
        </div>
      </div>
      <div className={style.ContainerIntro}>
        <div className={style.ContainerImg3}>
          <img data-aos="fade-up" src={introImg3} className={style.ImgIntro} />
        </div>
        <div data-aos="fade-left" className={style.ContainerIntroduc}>
          <h1>Se parte del futuro</h1>
          <p>
            En la actualidad se calcula que solo el 2% de la población mundial
            invierte en Cryptomonedas, Acciones o Bones. En midas capital tenes
            la oportunidad ingresar a este mundo.
          </p>
          <p>
            Conoce mas de <Link>Nosotros y esta gran Compañía</Link>.
          </p>
        </div>
      </div>
    </>
  );
};
