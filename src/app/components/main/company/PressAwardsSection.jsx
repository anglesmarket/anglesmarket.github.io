export function PressAwardsSection() {
  // Best practice: Show press mentions, awards, recognitions
  const press = [
    { outlet: "Forbes", headline: "Top 10 Investment Platforms to Watch in 2025" },
    { outlet: "TechCrunch", headline: "Angles of Bull Market launches AI-powered investor network" },
    { outlet: "Fast Company", headline: "Revolutionizing startup investing with transparency and trust" }
  ];
  const awards = [
    { name: "Best Fintech Startup 2025", org: "Global Fintech Awards" },
    { name: "AI Innovation Award", org: "Startup World" }
  ];
  return (
    <section className="my-16 animate-fade-in w-full px-4 md:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Press & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-6xl mx-auto">
        {press.map((p, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-gray-800 font-bold">{p.outlet}</span>
            <p className="text-gray-700 italic">{p.headline}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {awards.map((a, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-gray-800 font-bold">🏆 {a.name}</span>
            <span className="text-gray-600 text-sm">{a.org}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
