import { useState, useEffect } from "react";
import axios from "axios";

type CoinTypes = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
};

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export default function CoinsPage() {
  const [coins, coinsSet] = useState([]);
  let [isMounted, isMountedSet] = useState(false);

  useEffect(() => {
    isMountedSet(true);
    axios
      .get(url)
      .then((response) => {
        if (isMounted) {
          coinsSet(response.data);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMountedSet(!isMounted);
    };
  }, [isMounted]);

  function comma(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function get24hChange(percent: number) {
    if (percent > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="px-5">
        <div className="pt-5 max-w-8xl mx-auto sm:px-6 lg:px-1 overflow-auto content">
          <div style={styles.container}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coins.map((coin: CoinTypes) => {
                const {
                  id,
                  symbol,
                  name,
                  current_price,
                  image,
                  market_cap_rank,
                  total_volume,
                  price_change_percentage_24h,
                } = coin;

                // let;

                return (
                  <div
                    className="w-full shadow-lg rounded-md p-12 bg-gray-400 cursor-pointer "
                    key={id}
                  >
                    <div className="object-left object-top py-1 px-1 bg-gray-500 text-bold text-pink-100 w-8 flex shadow-sm justify-center items-center rounded-lg">
                      {market_cap_rank}
                    </div>
                    <div className="mb-4 flex flex-col justify-center items-center hover:filter blur">
                      <img
                        className="object-center object-cover rounded-full h-16 w-16"
                        src={image}
                        alt="logo"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-800  mb-2">
                        <span className="font-bold uppercase text-gray-700 mx-2">
                          {symbol}
                        </span>
                        {name}
                      </p>
                      <p className="text-xl text-gray-800 font-bold font-mono">
                        $ {comma(current_price)}{" "}
                        <span
                          className={`text-xs ${
                            get24hChange(price_change_percentage_24h)
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {price_change_percentage_24h.toFixed(2)}&nbsp;%
                        </span>
                      </p>
                      <p className="text-sm text-gray-700 font-mono pt-3">
                        <span className="text-xs">vol</span> ${" "}
                        {comma(total_volume)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm pl-1 font-mono">
          built on 🔥 by &nbsp;
          <span className="text-gray-800 font-bold">phtn458</span>
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    top: 100,
  },
};
