import { useState } from "react";
import { FaCoins, FaExchangeAlt, FaFireAlt } from "react-icons/fa";
import Coins from "./components/Coins";
import Donate from "./components/Donate";
import Exchanges from "./components/Exchanges";
import Trending from "./components/Trending";

function App() {
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // const [date] = useState(new Date());

  const [tab, tabSet] = useState(0);

  function getPage(t: number) {
    switch (t) {
      case 0:
        return <Coins />;
      case 1:
        return <Exchanges />;
      case 2:
        return <Trending />;
      case 3:
        return <Donate />;
      default:
        return <Coins />;
    }
  }

  return (
    <div className=" bg-cover bg-pink-100 py-2">
      <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-4 gap-1 flex h-10 px-8 shadow-lg flex justify-between">
        <div className="text-sm text-gray-700 font-mono pt-2">
          {/* π<span className="ml-5 mr-5">{days[date.getDay()]}</span> */}
          {/* {date.toLocaleDateString()} */}
          <FaCoins
            height={12}
            width={12}
            className="cursor-pointer"
            onClick={() => tabSet(0)}
          />
        </div>
        <div className="text-sm text-gray-700 font-mono pt-2">
          <FaExchangeAlt
            height={12}
            width={12}
            className="cursor-pointer"
            onClick={() => tabSet(1)}
          />
        </div>

        <div className="text-sm text-gray-700 font-mono pt-2">
          <FaFireAlt
            height={12}
            width={12}
            className="cursor-pointer"
            onClick={() => tabSet(2)}
          />
        </div>
        <div
          className="bg-gray-300 rounded-md text-green-700 flex justify-center align-item font-mono py-2  mb-2 cursor-pointer"
          onClick={() => tabSet(3)}
        >
          <p className="text-xs font-mono font-bold">Donate 💚 </p>
        </div>
      </div>
      {getPage(tab)}
    </div>
  );
}

export default App;
