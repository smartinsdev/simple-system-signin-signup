import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Title({ children }: Props) {
  return (
    <h1 className="text-3xl text-slate-50 font-sans font-extrabold text-center">
      {children}
    </h1>
  );
}
