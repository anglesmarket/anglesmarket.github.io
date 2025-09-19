import Article from "../app/components/layout/Article";

export default function SupportPage() {
  return (
    <Article>
      <h1>Support</h1>
      <p>Need help? Our support team is here for you.</p>
      <section>
        <h2>Contact Support</h2>
        <ul>
          <li>Email: <a href="mailto:support@anglesbull.com">support@anglesbull.com</a></li>
          <li>Live chat: Available 9am-6pm UTC</li>
          <li>Help Center: FAQs, troubleshooting, guides</li>
        </ul>
      </section>
      <section>
        <h2>Community Help</h2>
        <ul>
          <li>Discord: Join our support channel</li>
          <li>Forum: Ask questions, share tips</li>
        </ul>
      </section>
    </Article>
  );
}
