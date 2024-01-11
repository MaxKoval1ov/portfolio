import {memo} from 'react';
import type {AppProps} from 'next/app';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
});

export default MyApp;
