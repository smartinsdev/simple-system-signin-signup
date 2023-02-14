type Props = {
  label: string;
  loading: boolean;
};

export function Button({ label, loading }: Props) {
  return (
    <button
      disabled={loading}
      className={`text-slate-100 uppercase tracking-wide outline-none border-none bg-gradient-to-r from-green-900 to-green-600 bg-[length:300%] bg-[0%] hover:bg-[100%] transition-all duration-700 bg py-1 rounded-md ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
}
