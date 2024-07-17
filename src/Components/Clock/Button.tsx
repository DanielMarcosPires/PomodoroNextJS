"use client";
import React, { ComponentProps, Dispatch, SetStateAction, useState,useEffect } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  setActive: Dispatch<SetStateAction<boolean>>;
}
export default function Button({setActive,...props}:ButtonProps) {
  const [isStarted, setStart] = useState(true);

  useEffect(() => {
    setActive(isStarted);
  }, [isStarted, setActive]);
  const handleClick = () => {
    setStart((prev) => !prev);
  };
  return (
    <div>
      {isStarted && (
        <button className="bg-[#f86e6e] text-black relative top-3 font-semibold text-xl rounded-xl px-4"  onClick={handleClick} {...props}>
          Start
        </button>
      )}
      {!isStarted && (
        <button className=" rounded-xl relative top-3 px-4 font-semibold hover:bg-white/30 text-lg"  onClick={handleClick} {...props}>
          Stop
        </button>
      )}
    </div>
  );
}
