import { useEffect, useState } from "react";
import axios from "axios";
import { Zoom } from "react-awesome-reveal/";

type CoinType = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
};

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function Market() {
  const [coins, coinsSet] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        coinsSet(response.data);
      })
      .catch((err) => console.error(err));
  }, [coins]);

  function comma(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="w-full bg-gray-800 my-29">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            {/* We have the best equipment in the market */}
          </h2>
          <h1 className="font-regular text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            {/* Descartes Capital */}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {coins.map((coin: CoinType) => {
            const { id, symbol, name, current_price, image } = coin;

            const fixed = current_price.toFixed(2);

            return (
              <div
                className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
                key={id}
              >
                <Zoom>
                  <div className="mb-4">
                    <img
                      className="object-center object-cover rounded-full h-16 w-16"
                      src={image}
                      alt="logo"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-indigo-500  mb-2">
                      <span className="font-bold uppercase text-indigo-300 mx-2">
                        {symbol}
                      </span>
                      {name}
                    </p>
                    <p className="text-xl text-green-300 font-regular">
                      $ {comma(fixed)}
                    </p>
                  </div>
                </Zoom>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Market;
