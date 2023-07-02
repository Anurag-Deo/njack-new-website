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

  const [coords, setCoords] = useState([]);
  const [subcoords, setSubCoords] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getCoords');
        const data = await response.json();

        setCoords(data);
        // console.log('data', data);
        const response2 = await fetch('/api/getSubcoords');
        const data2 = await response2.json();
        setSubCoords(data2);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/getEvents');
        const data = await response.json();
        console.log('data', data);
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchEvents();
  }, []);

  useEffect(() => {
    let timer;
    const handleComplete = () => (timer = setTimeout(() => setLoading(false), 1000));

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
  }, [router.events]);
  return (
    <main className={JosefinSans.className}>
      {loading ? (
        <Loader />
      ) : (
        <Component {...pageProps} coords={coords} subcoords={subcoords} events={events} />
      )}
    </main>
  );
}
