import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

import { TextErrorField } from "@/components/erros/TextErroField";
import { ErrorType } from "@/types/customTypes";

type Props = {
  children: ReactNode;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  error?: ErrorType | null;
};

export function Checkbox({ children, setChecked, checked, error }: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(() => e.target.checked);
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center" htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          className={`${
            checked ? "form-check-input" : ""
          } appearance-none h-4 w-4 mb-1 border border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
          onChange={onChange}
          checked={checked}
        />
        {children}
      </label>
      {error && <TextErrorField message={error.message} />}
    </div>
  );
}
