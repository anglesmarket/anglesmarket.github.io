export function HeroSection({ mode }) {
  return (
    <section
      className={`relative min-h-[700px] md:min-h-[900px] px-4 py-24 md:py-32 overflow-hidden ${
        mode === "investor" ? "bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200" : "bg-gradient-to-br from-green-100 via-green-50 to-green-200"
      } animate-fade-in`}
    >
      {/* Scattered SVGs and icons */}
      <div className="absolute left-10 top-10 w-32 opacity-30 rotate-12 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" fill="#60A5FA" /></svg>
      </div>
      <div className="absolute right-20 top-32 w-24 opacity-20 -rotate-6 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none"><rect x="20" y="20" width="60" height="60" rx="16" fill="#34D399" /></svg>
      </div>
      <div className="absolute left-1/4 bottom-10 w-20 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none"><polygon points="50,10 90,90 10,90" fill="#FBBF24" /></svg>
      </div>
      <div className="absolute right-1/3 bottom-24 w-16 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="40" ry="20" fill="#A78BFA" /></svg>
      </div>

      {/* Main scattered content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Headline & CTA */}
        <div className="flex flex-col gap-8 items-start md:items-start text-left">
          <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-xl flex items-center gap-4">
            Angles of Bull Market <span className="text-4xl md:text-6xl">🎲</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-xl mb-2 font-semibold">
            {mode === "investor"
              ? "Discover and invest in the most promising startups. AI-powered matchmaking, secure messaging, and portfolio management."
              : "Connect with top investors, showcase your startup, and grow your business. AI agents, messaging, and a thriving ecosystem."}
          </p>
          <div className="text-lg md:text-2xl text-gray-500 italic mb-4">
            {mode === "investor"
              ? "Ready to roll the dice on the next unicorn?"
              : "Level up your startup game!"}
          </div>
          <div className="flex gap-6 mt-2">
            <a href="#signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl text-2xl shadow-lg transition duration-200">
              {mode === "investor" ? "Start Investing" : "Showcase Your Startup"}
            </a>
            <a href="#learn" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-2xl text-2xl shadow-lg border border-blue-300 transition duration-200">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Feature highlights scattered (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-10 items-end md:items-end">
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center w-[320px] ml-16 md:ml-32">
            <span className="text-5xl mb-4">🤖</span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">AI Matchmaking</h3>
            <p className="text-gray-600 text-center">Smart recommendations to connect investors and startups.</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center w-[280px] mr-8 md:mr-24">
            <span className="text-5xl mb-4">💬</span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Embedded Messaging</h3>
            <p className="text-gray-600 text-center">Secure, real-time chat for seamless communication.</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center w-[260px] ml-4 md:ml-12">
            <span className="text-5xl mb-4">🦾</span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">AI Investment Agents</h3>
            <p className="text-gray-600 text-center">Automated agents to assist with investments and due diligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
