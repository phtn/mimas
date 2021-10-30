// import Market from "./components/Market";
// import { useState } from "react";
// import Nav from "./components/Nav";
import { useState } from "react";
import Ridges from "./components/Ridges";

function App() {
  // const [dark, darkSet] = useState();

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
          π
          <span style={{ marginRight: 10, marginLeft: 10 }}>
            {days[date.getDay()]}
          </span>
          {date.toLocaleDateString()}
        </div>
      </div>
      <Ridges />
    </div>
  );
}

const styles = {
  dateText: {
    fontSize: 14,
    fontFamily: "Source Code Pro",
    fontWeight: 600,
  },
};

export default App;
