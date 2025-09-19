export function TeamSection() {
  // Best practice: Show leadership, bios, photos, credentials
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      bio: "Ex-VC, 15+ years in fintech, MIT alum.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "CTO & Co-Founder",
      bio: "AI/ML expert, ex-Google, Stanford PhD.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Lee",
      role: "Chief Investment Officer",
      bio: "Portfolio manager, CFA, 10+ years in private equity.",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];
    return (
      <section className="my-16 animate-fade-in w-full px-4 md:px-0">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 border-4 border-gray-300" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-700 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
  );
}
