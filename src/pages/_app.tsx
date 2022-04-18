import "../styles/globals.css";
import type { AppProps } from "next/app";
// layout
import AppLayout from "layout/AppLayout";
import "views/Home/Funds/funds.module.css";
import "views/Home/Gonear/gonear.module.css";
import "views/Home/HeroView/heroview.module.css";
import "views/Home/LearnMore/learn.module.css";
import "views/Home/RoadMap/roadmap.module.css";
import "views/Home/UpcomingView/Upcome.module.css";

// ------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
