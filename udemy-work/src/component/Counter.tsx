import { useEffect, useLayoutEffect, useState } from "react";

export default function Counter() {

  const [countValue, setcountValue] = useState(10);

  const increament = () => {
    setcountValue(countValue + 1);
    console.log(countValue);
  };

  const dencreament = () => {
    setcountValue(countValue - 1);
    console.log(countValue);
  };

  const reset = () => {
    setcountValue(0);
    console.log(countValue);
  };
  return (
    <div>
      <h1>Count</h1>
      <p>{countValue}</p>
      <div className="flex justify-center gap-10 mb-5 mt-5">
        <button
          className="border p-2 bg-teal-400 text-white font-bold"
          onClick={increament}
        >
          +
        </button>
        <button
          className="border p-2 bg-teal-400 text-white font-bold"
          onClick={dencreament}
        >
          -
        </button>
      </div>
      <button
        className="border p-2 bg-teal-400 text-white font-bold"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
