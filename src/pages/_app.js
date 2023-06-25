import '@/styles/globals.css';
import styles from '@/styles/slug.module.css';
import { Josefin_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loading() {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1500);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    Loading && (
      <div className={styles.loading}>
        <div className={styles.opposites}>
          <div className={`${styles.opposite} ${styles.bl}`} />
          <div className={`${styles.opposite} ${styles.tr}`} />
          <div className={`${styles.opposite} ${styles.br}`} />
          <div className={`${styles.opposite} ${styles.tl}`} />
        </div>
      </div>
    )
  );
}

const josefin_Sans = Josefin_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
  weight: '500',
  display: 'swap'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin_Sans.className}>
      <Loading />
      <Component {...pageProps} />
    </main>
  );
}
