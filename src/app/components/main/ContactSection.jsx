export function ContactSection() {
  return (
    <section className="relative my-24 animate-fade-in flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px]">
      {/* Decorative faded shapes - changed shapes/colors */}
      <div className="absolute left-0 top-0 w-40 h-40 opacity-25 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><rect x="30" y="30" width="196" height="120" rx="60" fill="#e0e7ef" /></svg>
      </div>
      <div className="absolute right-0 top-32 w-36 h-36 opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><ellipse cx="128" cy="128" rx="80" ry="50" fill="#e8f5e9" /></svg>
      </div>
      <div className="absolute left-1/2 bottom-0 w-24 h-24 opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><polygon points="128,32 224,224 32,224" fill="#b3e5fc" /></svg>
      </div>

      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-10 tracking-tight drop-shadow-xl flex items-center gap-4">
        Let's Connect <span className="text-3xl">💡</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl">
        {/* Call Us Action */}
        <a
          href="tel:+123456789"
          className="relative cursor-pointer group flex flex-col items-center justify-center py-8 px-3 md:py-14 md:px-8 transition-all duration-200 rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 border-blue-100 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #e3f2fd 80%, #b3e5fc 100%)' }}
        >
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" className="w-full h-full"><ellipse cx="128" cy="128" rx="80" ry="50" fill="#b3e5fc" /></svg>
          </div>
          <span className="relative z-10 text-3xl md:text-5xl mb-1 md:mb-3">📞</span>
          <span className="relative z-10 text-xl md:text-3xl font-bold mb-1 md:mb-2 text-blue-900">Call Us</span>
          <span className="relative z-10 text-sm md:text-lg text-blue-700 text-center">Speak directly with our team for support or questions.</span>
        </a>
        {/* Message Us Action */}
        <a
          href="mailto:hello@anglesbull.com"
          className="relative cursor-pointer group flex flex-col items-center justify-center py-8 px-3 md:py-14 md:px-8 transition-all duration-200 rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 border-green-100 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #f1f8e9 80%, #e8f5e9 100%)' }}
        >
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" className="w-full h-full"><rect x="60" y="60" width="136" height="80" rx="32" fill="#e8f5e9" /></svg>
          </div>
          <span className="relative z-10 text-3xl md:text-5xl mb-1 md:mb-3">💬</span>
          <span className="relative z-10 text-xl md:text-3xl font-bold mb-1 md:mb-2 text-green-900">Message Us</span>
          <span className="relative z-10 text-sm md:text-lg text-green-700 text-center">Send us a message and we’ll reply lightning fast!</span>
        </a>
        {/* Discord Option */}
        <a
          href="https://discord.com/invite/anglesbull"
          target="_blank"
          rel="noopener"
          className="relative cursor-pointer group flex flex-col items-center justify-center py-8 px-3 md:py-14 md:px-8 transition-all duration-200 rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 border-indigo-100 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #ede7f6 80%, #b3e5fc 100%)' }}
        >
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" className="w-full h-full"><ellipse cx="128" cy="128" rx="80" ry="50" fill="#b3e5fc" /></svg>
          </div>
          <span className="relative z-10 text-3xl md:text-5xl mb-1 md:mb-3">🎮</span>
          <span className="relative z-10 text-xl md:text-3xl font-bold mb-1 md:mb-2 text-indigo-900">Discord</span>
          <span className="relative z-10 text-sm md:text-lg text-indigo-700 text-center">Chat with us and the community on Discord!</span>
        </a>
      </div>
      <div className="mt-10 text-gray-500 text-lg md:text-xl italic text-center max-w-xl mx-auto">
        We reply faster than a speedrun! <span className="ml-2 text-2xl">🏃‍♂️💨</span>
      </div>
    </section>
  );
}
