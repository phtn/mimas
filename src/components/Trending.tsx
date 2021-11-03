import { useState, useEffect } from "react";
import axios from "axios";

interface TrendingTypes {
  coins?: [];
}

const end_point = "https://api.coingecko.com/api/v3/search/trending";

export default function TrendingPage() {
  const [trending, trendingSet] = useState({});
  let [isMounted, isMountedSet] = useState(false);

  useEffect(() => {
    isMountedSet(true);
    axios
      .get(end_point)
      .then((response) => {
        if (isMounted) {
          trendingSet(response.data);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMountedSet(!isMounted);
    };
  }, [isMounted]);

  const { coins }: TrendingTypes = trending;

  return (
    <>
      <div className="px-5">
        <div className="pt-5 max-w-8xl mx-auto sm:px-6 lg:px-1 overflow-auto content">
          <div style={styles.container}>
            <h2 className="text-green-700 font-mono font-bold justify-center align-item flex mb-2 bg-gray-200 py-1 rounded-md shadow-md">
              Whose making waves?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coins
                ? coins.map((each: any) => {
                    const { item } = each;
                    const { id, name, thumb, price_btc, score } = item;

                    return (
                      <div
                        className="w-full shadow-lg rounded-md p-12 bg-gray-400 cursor-pointer "
                        key={id}
                      >
                        <div className="object-left object-top py-1 px-1 bg-gray-500 text-bold text-pink-100 w-8 flex shadow-sm justify-center items-center rounded-lg">
                          {score}
                        </div>
                        <div className="mb-4 flex flex-col justify-center items-center hover:filter blur">
                          <img
                            className="object-center object-cover rounded-full h-16 w-16"
                            src={thumb}
                            alt="logo"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-800  mb-2">{name}</p>
                          <p className="text-md text-green-800 font-bold font-mono">
                            <span className="text-xs">Score</span> {score}
                          </p>
                          <p className="text-sm text-gray-700 font-mono pt-3">
                            <span className="text-xs">price</span> BTC{" "}
                            {price_btc}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
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
