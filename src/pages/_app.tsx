import GlobalLayout from "@/layouts/GlobalLayout";
import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@mui/styles";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/UI/Progress");
    },
    { ssr: false }
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <TopProgressBar />
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
