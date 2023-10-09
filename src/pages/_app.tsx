import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import 'swiper/css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <main
      className={`${poppins.className} relative scroll-smooth min-h-screen overflow-hidden landing_page`}
    >
      {<Component {...pageProps} />}
    </main>
  );
}
