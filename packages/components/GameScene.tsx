import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Option from "./Option";

export interface Level {
  id: number;
  chapterId: number;
  type: string;
  name: string;
  text: string;
  sound: string;
  answer: number;
  correct: string;
  option1: string;
  option2: string;
  option3: string;
}

export interface Chapter {
  id: number;
  name: string;
  description: string;
}

export interface Player {
  player: number;
  levelId: number;
  lastlevel: number;
}

interface Props {
  level: Level;
  chapter: Chapter;
  player: Player;
}

export default function GameScene({ level, player, chapter }: Props) {
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
        Capítulo {level.chapterId} - {chapter.name}
      </div>
    </div>
  );
}
