import Article from "../app/components/layout/Article";

export default function CareersPage() {
  return (
    <Article>
      <h1>Careers</h1>
      <p>Join our team and help shape the future of investing and innovation.</p>
      <section>
        <h2>Open Positions</h2>
        <ul>
          <li>Frontend Developer (React, TailwindCSS)</li>
          <li>Backend Engineer (Node.js, GraphQL)</li>
          <li>Product Designer (UI/UX)</li>
          <li>Community Manager</li>
          <li>Marketing Specialist</li>
        </ul>
      </section>
      <section>
        <h2>Why Work With Us?</h2>
        <ul>
          <li>Remote-first culture</li>
          <li>Competitive compensation</li>
          <li>Growth opportunities</li>
          <li>Inclusive, fun, and collaborative team</li>
        </ul>
      </section>
      <div>To apply, email your resume to <a href="mailto:careers@anglesbull.com">careers@anglesbull.com</a></div>
    </Article>
  );
}
