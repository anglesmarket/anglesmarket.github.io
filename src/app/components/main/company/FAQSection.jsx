export function FAQSection() {
  // Best practice: Show common questions, onboarding, support
  const faqs = [
    {
      q: "Is Angles of Bull Market regulated?",
      a: "Yes, we comply with all relevant investment regulations and conduct regular audits."
    },
    {
      q: "How do I get started as an investor?",
      a: "Sign up, complete KYC, and explore curated deals tailored to your interests."
    },
    {
      q: "Is my data secure?",
      a: "We use bank-grade encryption and follow strict privacy standards."
    },
    {
      q: "What fees do you charge?",
      a: "We offer transparent pricing. See our pricing page for details."
    }
  ];
  return (
    <section className="my-16 animate-fade-in w-full px-4 md:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{f.q}</h3>
            <p className="text-gray-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
