import Article from "../app/components/layout/Article";

export default function BlogPage() {
  return (
    <Article>
      <h1>Blog</h1>
      <p>Insights, news, and stories from the world of investing and startups.</p>
      <section>
        <h2>Latest Posts</h2>
        <ul>
          <li>How AI is Transforming Startup Investing</li>
          <li>Top 5 Tips for New Angel Investors</li>
          <li>Building a Winning Startup Pitch</li>
          <li>Community Success Stories</li>
        </ul>
      </section>
      <div>Want to contribute? Email <a href="mailto:blog@anglesbull.com">blog@anglesbull.com</a></div>
    </Article>
  );
}
