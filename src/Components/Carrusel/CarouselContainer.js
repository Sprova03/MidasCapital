import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "./carousele.module.css";
import "./carousel.css";
import engineer from "../Img/img1.jpg";
import school from "../Img/img2.jpg";
import vol from "../Img/img3.jpg";
import conv from "../Img/img7.jpg";
import aca from "../Img/img5.jpg";
import { Link } from "react-router-dom";

export const CarouselContainer = () => {
  return (
    <div className={styled.Contenedor}>
      <Carousel>
        <Carousel.Item className={styled.carousel} interval={3000}>
          <img className={styled.carouselImg} src={school} alt="Third slide" />
          <Carousel.Caption className={styled.carouselBack}>
            <h3 className={styled.h3}>
              <Link to="/">Somos el camino necesitabas.</Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styled.carousel} interval={3000}>
          <img
            className={styled.carouselImg}
            src={engineer}
            alt="First slide"
          />
          <Carousel.Caption className={styled.carouselBack}>
            <h3 className={styled.h3}>
              <Link to="/#">Impulsa tu capital desde donde estés.</Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styled.carousel} interval={3000}>
          <img className={styled.carouselImg} src={vol} alt="Second slide" />
          <Carousel.Caption className={styled.carouselBack}>
            <h3 className={styled.h3}>
              <Link to="/#">Nuestro compromiso es tu futuro.</Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styled.carousel} interval={3000}>
          <img className={styled.carouselImg} src={conv} alt="Third slide" />
          <Carousel.Caption className={styled.carouselBack}>
            <h3 className={styled.h3}>
              <Link to="/#">
                Traslada tu negocio a cualquier parte del mundo.
              </Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000} className={styled.carousel}>
          <img className={styled.carouselImg} src={aca} alt="Third slide" />
          <Carousel.Caption className={styled.carouselBack}>
            <h3 className={styled.h3}>
              <Link to="/#">Que no existan limites para tus proyectos.</Link>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
