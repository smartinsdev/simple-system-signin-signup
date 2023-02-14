import { ErrorType } from "@/types/customTypes";

type Props = ErrorType;

export function TextErrorField({ message }: Props) {
  return (
    <p
      role="alert"
      className="text-xs text-red-600 font-sans font-medium max-w-[50ch]"
    >
      {message}
    </p>
  );
}
