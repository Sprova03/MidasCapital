import React from "react";
import style from "./Cryptos.module.css";

const CoinRow = ({ coin, index }) => {
  return (
    <div>
      <div className={style.Container}>
        <div className={style.CryptoCard}>
          <div className={style.ContainerImgCry}>
            <img className={style.ImgCry} src={coin.image} />
          </div>
          <div className={style.NameCry}>
            <span>{coin.name} </span>

            <span> {coin.symbol}</span>
          </div>
          <div className={style.PriceCry}>
            ${coin.current_price.toLocaleString()}
          </div>
          <div
            className={`${style.PriceCangeCry} ${
              coin.price_change_percentage_24h > 0
                ? "text-success"
                : "text-danger"
            }`}
          >
            %{coin.price_change_percentage_24h}
          </div>
          <div className={style.VolumenCry}>
            ${coin.total_volume.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinRow;
