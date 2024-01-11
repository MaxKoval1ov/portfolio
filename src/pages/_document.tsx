import {Head, Html, Main, NextScript} from 'next/document';
import { Providers } from 'provider';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body>
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
