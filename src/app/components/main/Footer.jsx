export function Footer() {
  // ...existing code...
  // Add Next.js Link import
  // eslint-disable-next-line @next/next/no-html-link-for-pages
  const Link = require('next/link').default;
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 mt-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Tagline */}
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-extrabold text-white flex items-center gap-2">
            <span>Angles of Bull Market</span>
            <span className="text-3xl">🏆</span>
          </span>
          <span className="text-base text-gray-400 italic">Invest. Connect. Level Up.</span>
          <span className="text-xs text-gray-500 mt-2">The ultimate platform for investors & startups to play, win, and grow together.</span>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/features" className="hover:text-blue-400 transition">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Resources & Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/docs" className="hover:text-green-400 transition">Documentation</Link></li>
            <li><Link href="/support" className="hover:text-green-400 transition">Support</Link></li>
            <li><Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
          </ul>
          <div className="mt-6">
            <h4 className="text-md font-semibold text-white mb-2">Contact</h4>
            <p className="text-xs text-gray-400">Email: <a href="mailto:hello@anglesbull.com" className="underline hover:text-blue-400">hello@anglesbull.com</a></p>
            <p className="text-xs text-gray-400">Phone: <a href="tel:+123456789" className="underline hover:text-blue-400">+1 234 567 89</a></p>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-400 transition">🐦</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-300 transition">💼</a>
              <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-gray-100 transition">🐙</a>
              <a href="https://discord.com" target="_blank" rel="noopener" aria-label="Discord" className="hover:text-indigo-400 transition">🎮</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Newsletter</h3>
            <form className="flex flex-col gap-2">
              <label htmlFor="newsletter" className="text-xs text-gray-400">Get the latest updates</label>
              <div className="flex gap-2">
                <input id="newsletter" type="email" placeholder="Your email" className="px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-bold">Join</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Angles of Bull Market. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <span>Made with <span className="text-red-400">♥</span> and a dash of game!</span>
        </div>
        <div className="mt-2">Legal: This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
      </div>
    </footer>
  );
}
