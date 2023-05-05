import GlobalLayout from "@/layouts/GlobalLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/UI/Progress");
    },
    { ssr: false }
  );
  return (
    <>
      <RecoilRoot>
        <TopProgressBar />
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </RecoilRoot>
    </>
  );
}
