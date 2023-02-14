import { ChangeEvent, useState } from "react";

import { ErrorType } from "@/types/customTypes";
import { typeFieldValidate } from "@/helpers/fieldValidate";

export function useForm(type?: "email" | "password" | "username") {
  const [value, setValue] = useState("");
  const [error, setError] = useState<ErrorType | null>(null);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  const validate = (value: string) => {
    if (!value) {
      setError({ message: "Required field" });
      return false;
    }

    if (!type) {
      setError(null);
      return true;
    }

    if (typeFieldValidate[type] && !typeFieldValidate[type].regex.test(value)) {
      setError({ message: typeFieldValidate[type].message });
      return false;
    }
    setError(null);
    return true;
  };

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
