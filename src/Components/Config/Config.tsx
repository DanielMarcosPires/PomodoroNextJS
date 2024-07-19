"use client";
import React, { useState } from "react";

export default function Config() {
  const [flipflos, setFlipflop] = useState(false);
  return ( 
    <div >
      <button onClick={() => setFlipflop(!flipflos)}>Modal</button>
      {flipflos && (
        <div className="flex justify-center items-center absolute top-0 bg-black/90 w-screen h-screen">
          <div className="bg-white w-[50%] text-black">
            <header className="flex justify-between px-5">
              <h1 className="text-2xl">Configuração:</h1>
              <button onClick={() => setFlipflop(!flipflos)}>X</button>
            </header>
            <form className="flex justify-center" action="">
                <input className="border border-black" type="number" defaultValue={`00`} id="" />
                <p>:</p>
                <input className="border border-black" type="number" defaultValue={`00`} id="" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
