import '@/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin_Sans = Josefin_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
  weight: '500',
  display: 'swap'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin_Sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
