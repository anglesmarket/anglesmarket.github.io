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

export function PreviewFeatures() {
  const icons = ["🤖", "💬", "🦾", "🧑‍💼", "🛠️"];
  const features = [
    {
      title: "AI Matchmaking",
      desc: "Smart recommendations to connect investors and startups.",
    },
    {
      title: "Embedded Messaging",
      desc: "Secure, real-time chat for seamless communication.",
    },
    {
      title: "AI Investment Agents",
      desc: "Automated agents to assist with investments and due diligence.",
    },
    {
      title: "Comprehensive Profiles",
      desc: "Rich profiles to showcase experience, interests, and track records.",
    },
    {
      title: "Ecosystem Tools",
      desc: "Resources, analytics, and networking for the investment lifecycle.",
    },
  ];
  return (
    <section className="flex flex-wrap justify-center gap-8 my-12 animate-fade-in">
      {features.map((f, i) => (
        <div
          key={f.title}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-xs flex flex-col items-center hover:scale-105 transition-transform border-2 border-dashed border-gray-200"
        >
          <div className="text-4xl mb-2">{icons[i]}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
          <p className="text-gray-600 text-center">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export function LoginSignupSection({ onLogin, onSignup }) {
  return (
    <section className="text-center my-12 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Join Angles of Bull Market <span className="ml-2">🔥</span>
      </h2>
      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-400 text-white rounded-xl px-10 py-3 text-lg font-bold shadow-md hover:bg-blue-500 transition-all duration-200 hover:scale-105 border-2 border-blue-500"
          onClick={onLogin}
        >
          Login
        </button>
        <button
          className="bg-white text-gray-900 rounded-xl px-10 py-3 text-lg font-bold shadow-md hover:bg-green-100 transition-all duration-200 hover:scale-105 border-2 border-gray-300"
          onClick={onSignup}
        >
          Sign Up
        </button>
      </div>
      <div className="mt-4 text-gray-500 text-sm italic">
        No spam, just game-changing opportunities! 🎮
      </div>
    </section>
  );
}

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

export function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-gray-500 text-sm mt-12 animate-fade-in">
      &copy; {new Date().getFullYear()} Angles of Bull Market. All rights
      reserved. <span className="ml-2">🏆</span>
    </footer>
  );
}
