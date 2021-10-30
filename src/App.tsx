// import Market from "./components/Market";
// import { useState } from "react";
// import Nav from "./components/Nav";
import { useState } from "react";
import Ridges from "./components/Ridges";

function App() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [date] = useState(new Date());

  return (
    <div className=" bg-cover bg-pink-100 py-2">
      <div className="grid grid-cols-3 flex h-8 px-8 shadow-lg">
        <div className="text-sm text-gray-700 font-mono">
          π<span className="ml-5 mr-5">{days[date.getDay()]}</span>
          {date.toLocaleDateString()}
        </div>
      </div>
      <Ridges />
    </div>
  );
}

export default App;
