import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

export default function App({ Component, pageProps }: AppProps) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/UI/Progress");
    },
    { ssr: false }
  );
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}
