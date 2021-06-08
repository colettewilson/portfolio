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
      <Html lang="en" className="no-js">
        <Head>
          {gaScript()}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SD2XJ671F0"></script>
          <script async src="/js/modernizr.js" />
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