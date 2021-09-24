import React from "react";
import CoinRow from "./CoinRow";
import style from "./Cryptos.module.css";

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>No coins</div>;

  return (
    <div className={style.ContainerTodo}>
      <div className={style.ContainerCrypos}>
        {filteredCoins.slice(0, 5).map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TableCoins;
