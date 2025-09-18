export function ContactSection() {
  return (
    <section className="text-center my-12 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Questions? Get in touch! <span className="ml-2">🤔</span>
      </h2>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-400 text-white rounded-xl px-8 py-3 text-lg font-bold shadow-md hover:bg-blue-500 transition-all duration-200 hover:scale-105 border-2 border-blue-500">
          📞 Call Us
        </button>
        <button className="bg-white text-gray-900 rounded-xl px-8 py-3 text-lg font-bold shadow-md hover:bg-green-100 transition-all duration-200 hover:scale-105 border-2 border-gray-300">
          💬 Message Us
        </button>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        We reply faster than a speedrun! 🏃‍♂️💨
      </div>
    </section>
  );
}
