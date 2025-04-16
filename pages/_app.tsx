import { AppProps } from "next/app";
import "../styles/index.css";
import { useEffect } from "react";
import { airflex } from "nextjs-airflex";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (airflex) {
      airflex.create("310797", { devmode: true });
    }
  }, []);
  return <Component {...pageProps} />;
}
