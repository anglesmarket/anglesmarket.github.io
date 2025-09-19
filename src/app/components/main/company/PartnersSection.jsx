export function PartnersSection() {
  // Best practice: Show logos, strategic alliances, VCs, accelerators
  const partners = [
    { name: "Sequoia Capital", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sequoia_Capital_logo.png" },
    { name: "Y Combinator", img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Y_Combinator_logo.png" },
    { name: "Techstars", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Techstars_logo.png" },
    { name: "Goldman Sachs", img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Goldman_Sachs_Logo.png" }
  ];
    return (
      <section className="my-16 animate-fade-in w-full px-4 md:px-0">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={p.logo} alt={p.name} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{p.name}</h3>
              <p className="text-gray-700 text-sm text-center">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
  );
}
