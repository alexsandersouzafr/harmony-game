import React from "react";

export default function GameScene() {
  return (
    <div className="w-96 h-[70vh] bg-white p-8 rounded-3xl shadow-2xl">
      <div className="text-3xl font-semibold">O QUE VOCÊ OUVE?</div>
      <div className="pt-16 pb-16">placeholder da resposta</div>
      <div className="grid gap-2 items-center pt-16 pb-16">
        <div className="border-4 py-4 px-8 hover:bg-rose-600 hover:text-white text-zinc-800 hover:shadow-2xl border-rose-600 rounded-full font-bold text-2xl transition-all">
          2ª maior
        </div>
        <div className="border-4 py-4 px-8 hover:bg-rose-600 hover:text-white text-zinc-800 hover:shadow-2xl border-rose-600 rounded-full font-bold text-2xl transition-all">
          4ª maior
        </div>
        <div className="border-4 py-4 px-8 hover:bg-rose-600 hover:text-white text-zinc-800 hover:shadow-2xl border-rose-600 rounded-full font-bold text-2xl transition-all">
          5ª justa
        </div>
      </div>
      <div className="bottom-0 relative text-right">
        Capítulo 1 - Intervalos
      </div>
    </div>
  );
}
