import React, { ComponentProps } from "react";

export default function ProgressBar({ ...props }: ComponentProps<"circle">) {
  return (
    <div>
      <svg
        width="210"
        height="210"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle {...props}></circle>
      </svg>
    </div>
  );
}
