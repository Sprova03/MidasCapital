import React from "react";
import style from "./Cards2.module.css";

export const Cards2 = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={`${style.face} ${style.face1}`}>
          <div className={style.content}>
            <div className={style.icon}>
              <i
                className={`${style.IconTamaño} ${"fa fa-facebook-square"}`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className={`${style.face} ${style.face2}`}>
          <div className={style.content}>
            <h3>
              <a
                href="https://www.linkedin.com/in/adamdipinto/"
                target="_blank"
              >
                _adamdipinto
              </a>
            </h3>
            <p>This is where I network and build my professional protfolio.</p>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={`${style.face} ${style.face1}`}>
          <div className={style.content}>
            <div className={style.icon}>
              <i
                className={`${style.IconTamaño} ${"fa fa-twitter-square"}`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className={`${style.face} ${style.face2}`}>
          <div className={style.content}>
            <h3>
              <a href="https://twitter.com/AdamDipinto" target="_blank">
                @AdamDipinto
              </a>
            </h3>
            <p>
              This is where I read news and network with different social
              groups.
            </p>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={`${style.face} ${style.face1}`}>
          <div className={style.content}>
            <div className={style.icon}>
              <i
                className={`${style.IconTamaño} ${"fa fa-instagram"}`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className={`${style.face} ${style.face2}`}>
          <div className={style.content}>
            <h3>
              <a href="https://github.com/atom888" target="_blank">
                atom888
              </a>
            </h3>
            <p>This is where I share code and work on projects.</p>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={`${style.face} ${style.face1}`}>
          <div className={style.content}>
            <div className={style.icon}>
              <i
                className={`${style.IconTamaño} ${"fa fa-whatsapp"}`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className={`${style.face} ${style.face2}`}>
          <div className={style.content}>
            <h3>
              <a href="https://twitter.com/AdamDipinto" target="_blank">
                @AdamDipinto
              </a>
            </h3>
            <p>
              This is where I read news and network with different social
              groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
