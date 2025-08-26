"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [step, _setStep] = useState(1);

  const handleInc = () => setCount(count + step);

  const handleDesc = () => setCount(count - step);

  const handleReset = () => setCount(0);

  return (
    <div className="mx-82 mt-4">
      <img src="./moon.jpg" width={1300} height={50} alt="" />

      <div className="bg-gray-300 w-[500px] h-[250px] rounded-lg mt-6">
        <p className="text-center pt-[70px]">{count}</p>
        <div className="flex justify-center gap-5 pt-[20px]">
          <button
            onClick={handleInc}
            className="border-0 rounded-md px-4 py-1 cursor-pointer text-white bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={handleDesc}
            className="border-0 rounded-md px-4 py-1 cursor-pointer text-white bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="border-0 rounded-md px-4 py-1 cursor-pointer text-white bg-yellow-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
