import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Site internet de Julien Berthoumieux, développeur web." />
        <title>Julien Berthoumieux</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}