import { useState, useEffect } from "react";
import axios from "axios";

type ExchangeTypes = {
  id: string;
  name: string;
  image: string;
  trust_score: number;
  trust_score_rank: number;
  total_volume: number;
  trade_volume_24h_btc: number;
  url: string;
};

const end_point = "https://api.coingecko.com/api/v3/exchanges";

export default function ExchangesPage() {
  const [ex, exSet] = useState([]);
  let [isMounted, isMountedSet] = useState(false);

  useEffect(() => {
    isMountedSet(true);
    axios
      .get(end_point)
      .then((response) => {
        if (isMounted) {
          exSet(response.data);
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

  return (
    <>
      <div className="px-5">
        <div className="pt-5 max-w-8xl mx-auto sm:px-6 lg:px-1 overflow-auto content">
          <div style={styles.container}>
            <h2 className="text-green-700 font-mono font-bold justify-center align-item flex mb-2 bg-gray-200 py-1 rounded-md">
              Top Exchanges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ex.map((exchange: ExchangeTypes) => {
                const {
                  id,
                  name,
                  image,
                  trust_score,
                  trust_score_rank,
                  trade_volume_24h_btc,
                  url,
                } = exchange;

                const fixed_two = trade_volume_24h_btc.toFixed(2);

                return (
                  <div
                    className="w-full shadow-lg rounded-md p-12 bg-gray-400 cursor-pointer "
                    key={id}
                  >
                    <div className="object-left object-top py-1 px-1 bg-gray-500 text-bold text-pink-100 w-8 flex shadow-sm justify-center items-center rounded-lg">
                      {trust_score_rank}
                    </div>
                    <div className="mb-4 flex flex-col justify-center items-center hover:filter blur">
                      <a href={url}>
                        <img
                          className="object-center object-cover rounded-full h-16 w-16"
                          src={image}
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-800  mb-2">{name}</p>
                      <p className="text-md text-green-800 font-bold font-mono">
                        <span className="text-xs">Trust Score</span>{" "}
                        {trust_score}
                      </p>
                      <p className="text-sm text-gray-700 font-mono pt-3">
                        <span className="text-xs">vol</span> BTC{" "}
                        {comma(parseInt(fixed_two))}
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
