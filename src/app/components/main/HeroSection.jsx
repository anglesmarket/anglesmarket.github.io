export function HeroSection({ mode }) {
  return (
    <section
      className={`py-16 text-center ${
        mode === "investor" ? "bg-blue-50" : "bg-green-50"
      } animate-fade-in`}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">
        Angles of Bull Market
        <span className="ml-2 text-3xl">🎲</span>
      </h1>
      <p className="text-2xl text-gray-700 max-w-xl mx-auto mb-2">
        {mode === "investor"
          ? "Discover and invest in the most promising startups. AI-powered matchmaking, secure messaging, and portfolio management."
          : "Connect with top investors, showcase your startup, and grow your business. AI agents, messaging, and a thriving ecosystem."}
      </p>
      <div className="mt-4 text-lg text-gray-500 italic">
        {mode === "investor"
          ? "Ready to roll the dice on the next unicorn?"
          : "Level up your startup game!"}
      </div>
    </section>
  );
}
