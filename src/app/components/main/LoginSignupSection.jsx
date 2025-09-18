export function LoginSignupSection({ onLogin, onSignup }) {
  return (
    <section className="relative my-24 animate-fade-in flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px]">
      {/* Decorative faded shapes */}
      <div className="absolute left-0 top-0 w-64 h-64 opacity-30 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><ellipse cx="128" cy="128" rx="110" ry="80" fill="#e3f2fd" /></svg>
      </div>
      <div className="absolute right-0 top-32 w-48 h-48 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><rect x="40" y="40" width="176" height="120" rx="48" fill="#f1f8e9" /></svg>
      </div>
      <div className="absolute left-1/3 bottom-0 w-40 h-40 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 256 256" fill="none"><polygon points="128,32 224,224 32,224" fill="#90caf9" /></svg>
      </div>

      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-12 tracking-tight drop-shadow-xl flex items-center gap-4">
        Join Angles of Bull Market <span className="text-4xl">🔥</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
        {/* Login Action */}
        <div
          className="relative cursor-pointer group flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-16 transition-all duration-200 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 border-blue-100 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #e3f2fd 80%, #90caf9 100%)' }}
          onClick={onLogin}
          role="button"
          tabIndex={0}
        >
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" className="w-full h-full"><ellipse cx="128" cy="128" rx="110" ry="80" fill="#90caf9" /></svg>
          </div>
          <span className="relative z-10 text-4xl md:text-6xl mb-2 md:mb-4">🔑</span>
          <span className="relative z-10 text-2xl md:text-5xl font-bold mb-1 md:mb-2 text-blue-900">Login</span>
          <span className="relative z-10 text-base md:text-2xl text-blue-700 text-center">Access your investor or startup dashboard, messaging, and more.</span>
        </div>
        {/* Signup Action */}
        <div
          className="relative cursor-pointer group flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-16 transition-all duration-200 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 border-green-100 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #f1f8e9 80%, #90caf9 100%)' }}
          onClick={onSignup}
          role="button"
          tabIndex={0}
        >
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" className="w-full h-full"><rect x="40" y="40" width="176" height="120" rx="48" fill="#90caf9" /></svg>
          </div>
          <span className="relative z-10 text-4xl md:text-6xl mb-2 md:mb-4">✨</span>
          <span className="relative z-10 text-2xl md:text-5xl font-bold mb-1 md:mb-2 text-green-900">Sign Up</span>
          <span className="relative z-10 text-base md:text-2xl text-green-700 text-center">Create your account and join the bull market adventure!</span>
        </div>
      </div>
      <div className="mt-12 text-gray-500 text-xl italic text-center max-w-2xl mx-auto">
        No spam, just game-changing opportunities! <span className="ml-2 text-2xl">🎮</span>
      </div>
    </section>
  );
}
