export function LegalSection() {
  // Best practice: Show compliance, privacy, terms, risk disclosure
  return (
    <section className="my-16 animate-fade-in w-full px-4 md:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center w-full">Legal & Compliance</h2>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Risk Disclosure</h3>
          <p className="text-gray-700">Investing in startups involves significant risks, including loss of capital. Past performance does not guarantee future results. Please review our full risk disclosure and consult with a financial advisor before investing.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Privacy & Security</h3>
          <p className="text-gray-700">We use bank-grade encryption and comply with GDPR and other privacy regulations. Your data is protected and never sold to third parties.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Terms of Service</h3>
          <p className="text-gray-700">By using Angles of Bull Market, you agree to our Terms of Service and Privacy Policy. Please read these documents carefully.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Licensing & Regulation</h3>
          <p className="text-gray-700">Angles of Bull Market is registered and operates in compliance with applicable investment laws and regulations.</p>
        </div>
      </div>
    </section>
  );
}
