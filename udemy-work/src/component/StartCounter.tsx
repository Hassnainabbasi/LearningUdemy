import { useEffect, useState } from "react";
import React from "react";

export default function StartCounter() {
  const [countValue, setcountValue] = useState(10); 
  const [intervalId, setIntervalId] = useState(null);

  const startCounter = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setcountValue((countVal) => {
        return countVal + 1;
      });
    }, 1);

    setIntervalId(id);
    console.log(countValue);
  };

  const stopCounter = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    console.log(countValue);
  };

  const ResetCounter = () => {
    setcountValue(0);
    console.log(countValue);
  };

  useEffect(() => {
    startCounter();
  }, []);
  return (
    <div>
      <h1>Count</h1>
      <p>{countValue}</p>
      <div className="flex justify-center gap-10 mb-5 mt-5">
        <button
          className="border p-2 bg-teal-400 text-white font-bold"
          onClick={startCounter}
        >
          +
        </button>
        <button
          className="border p-2 bg-teal-400 text-white font-bold"
          onClick={stopCounter}
        >
          -
        </button>
      </div>
      <button
        className="border p-2 bg-teal-400 text-white font-bold"
        onClick={ResetCounter}
      >
        Reset
      </button>
    </div>
  );
}
