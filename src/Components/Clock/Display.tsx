"use client";
import React, { ComponentProps, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./css/style.css";
import Button from "./Button";

export default function Display({ children }: ComponentProps<"div">) {
  const [active, setActive] = useState(false);
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");

  useEffect(() => {
    let time: string | undefined;

    if (React.isValidElement(children)) {
      time = children.props.children as string;
    } else if (typeof children === "string") {
      time = children;
    }

    if (time) {
      const [minute, second] = time.split(":");
      setMin(minute);
      setSec(second);
    }
  }, [children]);

  useEffect(() => {
    if (!active) {
      const intervalo = setInterval(() => {
        setSec((prevSec) => {
          let secNum = parseInt(prevSec);
          let minNum = parseInt(min);

          if (secNum > 0) {
            secNum--;
          } else if (minNum > 0) {
            secNum = 59;
            setMin((prevMin) => {
              let minNum = parseInt(prevMin);
              minNum--;
              return minNum < 10 ? `0${minNum}` : minNum.toString();
            });
          } else {
            clearInterval(intervalo);
          }

          return secNum < 10 ? `0${secNum}` : secNum.toString();
        });
      }, 1000);

      // Limpa o intervalo quando o componente é desmontado ou quando `active` muda para false
      return () => clearInterval(intervalo);
    }
  }, [active, min]);

  return (
    <div className="py-10">
      <div className="clock sombra">
        <ProgressBar
          cx="100"
          cy="100"
          r="95"
          stroke="orangered"
          className="progress-bar__progress"
          strokeDashoffset={Math.floor(Math.random() * 400 + 100)}
          strokeWidth={10}
        />
        <div className="time">
          <h1
            className={`clockTime ${
              min === "00" && sec === "00" && "clockTime_end textShadow"
            }`}
          >{`${min}:${sec}`}</h1>
          <Button  setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
