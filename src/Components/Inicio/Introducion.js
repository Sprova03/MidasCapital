import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import style from "./Inicio.module.css";
import introImg from "../Img/intro.jpg";

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
          <img data-aos="fade-up" src={introImg} className={style.ImgIntro} />
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
    </>
  );
};
