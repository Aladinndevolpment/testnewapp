import GlobalLayout from "@/layouts/GlobalLayout";
import "@/styles/globals.css";
import createEmotionCache from "@/utils/createEmotionCache";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const TopProgressBar = dynamic(
    () => {
      return import("../components/UI/Progress");
    },
    { ssr: false }
  );

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>
            <TopProgressBar />
            <GlobalLayout>
              <Component {...pageProps} />
            </GlobalLayout>
          </RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
