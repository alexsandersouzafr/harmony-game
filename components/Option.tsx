import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Option({ children }: Props) {
  return (
    <div className="border-2 py-4 px-8 hover:bg-rose-600 hover:text-white text-zinc-700 hover:shadow-2xl border-rose-600 rounded-full font-bold text-xl transition-all">
      {children}
    </div>
  );
}
