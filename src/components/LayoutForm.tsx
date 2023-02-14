import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function LayoutForm({ children }: Props) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-3 bg-slate-900">
      {children}
    </main>
  );
}
