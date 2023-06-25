import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Loader from '@/components/Loader';

const JosefinSans = Josefin_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
  weight: '500',
  display: 'swap'
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    const handleComplete = () => timer = setTimeout(() => setLoading(false), 1500);

    const handleStart = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(true);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  },[router.events]);
  return (
    <main className={JosefinSans.className}>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </main>
  );
}
