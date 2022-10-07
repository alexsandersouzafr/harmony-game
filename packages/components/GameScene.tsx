import { Level } from "@prisma/client";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Option from "./Option";

interface Props {
  level: Level;
}

export default function GameScene({ level }: Props) {
  return (
    <div className="w-96 h-[70vh] bg-white p-8 rounded-3xl shadow-2xl">
      <div className="text-2xl font-semibold text-zinc-700">{level.text}</div>
      <div className="grid pt-16 pb-8 cursor-pointer shad place-content-center">
        <BsFillPlayCircleFill size={80} color="#e11d48" />
      </div>
      <div className="grid gap-2 items-center pt-16 pb-16">
        <Option>{level.option1}</Option>
        <Option>{level.option2}</Option>
        <Option>{level.option3}</Option>
      </div>
      <div className="bottom-0 relative text-right text-zinc-700">
        Capítulo placeholder
      </div>
    </div>
  );
}
