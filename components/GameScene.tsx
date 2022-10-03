import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Option from "./Option";

export default function GameScene() {
  return (
    <div className="w-96 h-[70vh] bg-white p-8 rounded-3xl shadow-2xl">
      <div className="text-3xl font-semibold">O QUE VOCÊ OUVE?</div>
      <div className="grid pt-16 pb-8 cursor-pointer shad place-content-center">
        <BsFillPlayCircleFill size={80} color="#e11d48" />
      </div>
      <div className="grid gap-2 items-center pt-16 pb-16">
        <Option>2ª maior</Option>
        <Option>3ª maior</Option>
        <Option>8ª justa</Option>
      </div>
      <div className="bottom-0 relative text-right text-zinc-700">
        Capítulo 1 - Intervalos
      </div>
    </div>
  );
}
