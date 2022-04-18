import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// styled-component
import { ServerStyleSheet } from "styled-components";

// ----------------------------------------------------------------------

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js"
          />
          <link href="../views/Home/HeroView/heroview.module.css" rel="stylesheet" />
          <link href="views/Home/Funds/funds.module.css" rel="stylesheet" />
          <link href="views/Home/Gonear/gonear.module.css" rel="stylesheet" />
          <link href="views/Home/HeroView/heroview.module.css" rel="stylesheet" />
          <link href="views/Home/LearnMore/learn.module.css" rel="stylesheet" />
          <link href="views/Home/RoadMap/roadmap.module.css" rel="stylesheet" />
          <link href="views/Home/UpcomingView/Upcome.module.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <NextScript />
        </body>
      </Html>
    );
  }
}
