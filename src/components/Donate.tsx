import React from "react";

export default function Donate() {
  const address = [
    {
      add: "bc1qh699nvt7czntmkms5mywr4uq47sp83732729hv",
      name: "Bitcoin",
      symbol: "btc",
    },
    {
      add: "0xEC748F19471F7A44651996b0dec182e75b11A3b5",
      name: "Ethereum",
      symbol: "eth",
    },
    {
      add: "rDR94ZNHJ8KyqmFpR9Wt7rZpkFw1uNbPtr",
      name: "XRP",
      symbol: "xrp",
    },
    {
      add: "1irDwc1gN9iXGWgfzYtn2Jh8fdAVywE1Y99S57fqeuWjt3W",
      name: "Polkadot",
      symbol: "dot",
    },
    {
      add: "tz1M1K89sytxZAvyTS5EFySANArBeNve3MMa",
      name: "Tezos",
      symbol: "xtz",
    },
    {
      add: "cosmos1rvyuu22lyccgsrse46rfcystzjdz83fyx9lumg",
      name: "Cosmos",
      symbol: "atom",
    },
    {
      add: "5BRQ3XPIWKPFM3HLKO2SB7Z7M4V77NYNMHNMYO5PX7N42CJMMHIO22NK6M",
      name: "Algorand",
      symbol: "algo",
    },
    {
      add: "hx0f09a00ced483937a45403add609b5659d1e38eb",
      name: "Icon",
      symbol: "icx",
    },
    {
      add: "0xEC748F19471F7A44651996b0dec182e75b11A3b5",
      name: "Tether (ETH)",
      symbol: "usdt",
    },
    {
      add: "ALWWXs6HmDhVQWN7Z3cYh18AHZYS3L5m6w",
      name: "Ontology",
      symbol: "ont",
    },
    {
      add: "QYPq5DoJC5DcY6qUCWj4xPg5J6pwpsNaWh",
      name: "Qtum",
      symbol: "qtum",
    },
    {
      add: "0xEC748F19471F7A44651996b0dec182e75b11A3b5",
      name: "Storj",
      symbol: "storj",
    },
    {
      add: "TGKCmde8ny7LuBwqv7jTKWXHc3u7rRPZwa",
      name: "Tron",
      symbol: "trx",
    },
    {
      add: "C6DBbCQHvfAFZWhnQxo367YZ9j3B6eTyjB1yiGHNPTpf",
      name: "Solana",
      symbol: "sol",
    },
    {
      add: "0xEC748F19471F7A44651996b0dec182e75b11A3b5",
      name: "Shiba Inu",
      symbol: "shib",
    },
    {
      add: "DLFNBffK7S5ocfer5VevJNTyZDe1CzoaYk",
      name: "Dogecoin",
      symbol: "doge",
    },
  ];
  return (
    <div className="px-1">
      <div className="pt-5 max-w-8xl mx-auto sm:px-6 lg:px-1 flex overflow-auto content">
        <div>
          <h2 className="text-green-700 font-mono font-bold justify-center align-item flex mb-2 bg-gray-200 py-1 rounded-md">
            Help me improve this app!
          </h2>
          <ul className="divide-y divide-pink-200 bg-gray-400 rounded-sm">
            {address.map((item) => (
              <li key={item.symbol} className="py-4 flex overflow">
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    <span className="uppercase font-bold font mono text-gray-700 pr-2">
                      {" "}
                      {item.symbol}{" "}
                    </span>
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-100 font-mono overflow">
                    {item.add}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-3 flex justify-center mt-2">
          <p className="text-gray-600 text-xs pl-1 font-mono">
            built on ???? by
            <a className={"no-underline"} href="https://github.com/phtn/mimas">
              <span className="text-gray-800 text-sm font-bold pl-2">
                phtn458
              </span>
            </a>
          </p>
        </div>
    </div>
  );
}
