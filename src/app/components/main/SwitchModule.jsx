export function SwitchModule({ mode, setMode }) {
  return (
    <div className="flex justify-center mb-8 gap-4">
      <button
        className={`px-8 py-2 rounded-xl font-bold border transition-all duration-200 shadow-md text-lg hover:scale-105 ${
          mode === "investor"
            ? "bg-blue-400 text-white border-blue-500 animate-bounce"
            : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
        }`}
        onClick={() => setMode("investor")}
      >
        🦄 For Investors
      </button>
      <button
        className={`px-8 py-2 rounded-xl font-bold border transition-all duration-200 shadow-md text-lg hover:scale-105 ${
          mode === "startup"
            ? "bg-green-400 text-white border-green-500 animate-bounce"
            : "bg-white text-gray-800 border-gray-300 hover:bg-green-100"
        }`}
        onClick={() => setMode("startup")}
      >
        🚀 For Startups
      </button>
    </div>
  );
}
