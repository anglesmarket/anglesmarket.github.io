import Article from "../app/components/layout/Article";

export default function ContactPage() {
  return (
    <Article>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out for support, partnership, or general inquiries.</p>
      <section>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:hello@anglesbull.com">hello@anglesbull.com</a></li>
          <li>Phone: <a href="tel:+123456789">+1 234 567 89</a></li>
        </ul>
      </section>
      <section>
        <h2>Social Media</h2>
        <ul>
          <li>Twitter: <a href="https://twitter.com">@anglesbull</a></li>
          <li>LinkedIn: <a href="https://linkedin.com">Angles of Bull Market</a></li>
          <li>Discord: <a href="https://discord.com">Join our server</a></li>
        </ul>
      </section>
    </Article>
  );
}
