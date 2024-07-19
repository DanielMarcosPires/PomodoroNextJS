import { Clock } from "@/Components/Clock";
import Config from "@/Components/Config/Config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-center py-5">
        <h2 className="text-4xl font-semibold">Pomodoro</h2>
        <Clock.Display>25:00</Clock.Display>
        {/* <Config /> */}
      </div>
    </>
  );
}
