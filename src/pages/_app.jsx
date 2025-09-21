
import "../app/globals.css";
import Article from "../app/components/layout/Article";

export default function MyApp({ Component, pageProps }) {
  return (
    <Article>
      <Component {...pageProps} />
    </Article>
  );
}
