import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "./carousele.module.css";
import "./carousel.css";
import engineer from "../Img/img1.jpg";
import school from "../Img/img2.jpg";
import vol from "../Img/img6.png";
import conv from "../Img/img7.jpg";
import aca from "../Img/img5.jpg";

export const CarouselContainer = () => {
  return (
    <Carousel className={styled.carousel}>
      <Carousel.Item interval={3000}>
        <img  className={styled.carousel} src={school} alt="Third slide" />
        <Carousel.Caption className={styled.carouselBack}>
          <h3 className={styled.h3}>
            <a >
              English for primary and secondary school.
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styled.carousel} interval={3000}>
        <img sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px," className={styled.carousel} src={engineer} alt="First slide" />
        <Carousel.Caption className={styled.carouselBack}>
          <h3 className={styled.h3}>
            <a >
              English for aircraft engineers and mechanics.
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px," className={styled.carousel} src={vol} alt="Second slide" />
        <Carousel.Caption className={styled.carouselBack}>
          <h3 className={styled.h3}>
            <a >English for UN volunteers.</a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className={styled.carousel} src={conv} alt="Third slide" />
        <Carousel.Caption className={styled.carouselBack}>
          <h3 className={styled.h3}>
            <a >Conversation course.</a>
          </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px," className={styled.carousel} src={aca} alt="Third slide" />
        <Carousel.Caption className={styled.carouselBack}>
          <h3 className={styled.h3}>
            <a>English for academic purposes.</a>
          </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
