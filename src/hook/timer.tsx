import React from "react";

interface timer {
    time: string;
}
export default function timer({time}:timer) {
    console.log(time);
}
