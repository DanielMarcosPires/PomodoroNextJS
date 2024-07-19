"use client";
import React, {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
interface ButtonProps extends ComponentProps<"button"> {
  setActive: Dispatch<SetStateAction<boolean>>;
}
export default function Button({ setActive, ...props }: ButtonProps) {
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
        <button
          className="buttonStart clockButton  px-4"
          onClick={handleClick}
          {...props}
        >
          Start
        </button>
      )}
      {!isStarted && (
        <button
          className=" buttonStop clockButton"
          onClick={handleClick}
          {...props}
        >
          Stop
        </button>
      )}
    </div>
  );
}
