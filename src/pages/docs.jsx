import Article from "../app/components/layout/Article";
import Link from "next/link";

export default function DocsPage() {
  return (
    <Article>
      <h1>Documentation</h1>
      <p>Find guides, API references, and onboarding resources for Angles of Bull Market.</p>
      <section>
        <h2>Getting Started</h2>
        <ul>
          <li>
            <Link href="/signup-verify" className="text-blue-600 underline">How to sign up and verify your account</Link>
          </li>
          <li>
            <Link href="/onboarding" className="text-blue-600 underline">Investor and startup onboarding</Link>
          </li>
          <li>
            <Link href="/navigation-tips" className="text-blue-600 underline">Platform navigation tips</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>API Reference</h2>
        <ul>
          <li>
            <Link href="/rest-api" className="text-blue-600 underline">REST API endpoints</Link>
          </li>
          <li>
            <Link href="/auth-security" className="text-blue-600 underline">Authentication & security</Link>
          </li>
          <li>
            <Link href="/rate-limits" className="text-blue-600 underline">Rate limits & best practices</Link>
          </li>
        </ul>
      </section>
    </Article>
  );
}
