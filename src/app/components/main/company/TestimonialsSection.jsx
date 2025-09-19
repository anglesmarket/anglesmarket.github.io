export function TestimonialsSection() {
  // Best practice: Show investor & startup testimonials, success stories
  const testimonials = [
    {
      quote: "Angles of Bull Market connected us with the perfect investor. The process was seamless and professional!",
      name: "Sara Kim",
      role: "Founder, FinTechX"
    },
    {
      quote: "Their AI matchmaking is a game changer. We found two deals in our first month!",
      name: "David Chen",
      role: "Angel Investor"
    },
    {
      quote: "The platform's security and compliance features gave us total peace of mind.",
      name: "Lina Rodriguez",
      role: "CEO, HealthStart"
    }
  ];
      return (
        <section className="my-16 animate-fade-in w-full px-4 md:px-0">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-4 border-gray-300" />
                <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
                <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
  );
}
