import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet" />
        <Script src="//embed.typeform.com/next/embed.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
