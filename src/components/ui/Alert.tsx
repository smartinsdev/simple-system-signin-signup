type Props = {
  message: string;
  type: "success" | "error";
};

export function Alert({ message, type }: Props) {
  return (
    <div className="popup fixed z-20 top-3 w-full max-w-3xl flex flex-col justify-center align-center left-1/2">
      <div
        className={`${type === "error" ? "text-red-600" : ""} ${
          type === "success" ? "text-green-600" : ""
        } bg-gray-800 text-center py-4 px-8 w-full shadow-lg flex justify-center items-center my-2`}
      >
        {message}
      </div>
    </div>
  );
}
