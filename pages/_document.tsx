import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Courgette&family=Fasthand&family=Federo&family=Gloock&family=Hind+Vadodara&family=Inter+Tight:wght@300&family=Noto+Serif+JP:wght@500&family=PT+Sans+Narrow&family=PT+Sans:wght@700&family=Pacifico&family=Permanent+Marker&family=Poiret+One&family=Quicksand&family=Roboto&family=Rock+Salt&family=Shantell+Sans:ital,wght@1,300&family=Sono&family=Thasadith:wght@400;700&family=Ubuntu:ital,wght@1,300&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
