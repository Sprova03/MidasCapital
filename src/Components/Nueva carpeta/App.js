import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import style from "./Api.module.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.ContainerInput}>
        <input
          type="text"
          placeholder="Busca tu Crypto"
          className={`${
            style.Input
          } ${"form-control bg-dark text-light border-0 mt-4 text-center"}`}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={style.ContainerCr}>
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
