import "../app/globals.css";
import Article from "../app/components/layout/Article";
import { Footer } from "../app/components/main/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Article>
        <Component {...pageProps} />
      </Article>
      <Footer />
    </>
  );
}
