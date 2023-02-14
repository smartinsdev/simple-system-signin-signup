import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

import { ErrorType } from "@/types/customTypes";
import { TextErrorField } from "../erros/TextErroField";

type Props = {
  label: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  error: ErrorType | null;
  Icon: ReactNode;
  setShowPassword?: () => void;
};

export function Input({
  label,
  type,
  value,
  onChange,
  error,
  Icon,
  onBlur,
  setShowPassword,
}: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <label
        className="text-sm capitalize text-slate-400 font-sans font-semibold"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative group ">
        <input
          className="text-slate-50 w-full bg-transparent rounded-md border border-slate-700 outline-none focus:border-slate-300 group-hover:border-slate-300 p-1 text-base transition-all duration-300"
          type={type}
          name={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span
          className={`absolute p-2 top-1/2 -translate-y-1/2 right-0 text-slate-700 group-hover:text-slate-300 group-focus-within:text-slate-300 transition-all duration-300 ${
            label === "password" ? "cursor-pointer" : ""
          }`}
          onClick={setShowPassword}
        >
          {Icon}
        </span>
      </div>
      {error && <TextErrorField message={error.message} />}
    </div>
  );
}
