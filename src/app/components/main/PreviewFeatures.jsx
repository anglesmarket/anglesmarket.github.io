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
