import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='fr'>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Je suis un développeur passionné de 28 ans basé à Toulouse. J’aime designer, concevoir et développer des solutions performantes et modernes tout en apportant un soin particulier à l’expérience utilisateur."
        />
        <title>Julien Berthoumieux</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}