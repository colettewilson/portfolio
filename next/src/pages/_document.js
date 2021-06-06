import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    const gaScript = () => (
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SD2XJ671F0');`,
        }}
      />
    )

    return (
      <Html lang="en">
        <Head>
          {gaScript()}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SD2XJ671F0"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>    
    )
  }
}

export default MyDocument