import Applications from '@/components/Applications';
import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Progress from '@/components/Progress';
import Testimoni from '@/components/Testimoni';
import Works from '@/components/Works';
import Navbar from '@/components/Navbar';
import Pricelist from '@/components/Pricelist';
import Footer from '@/components/Footer';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Nodewave</title>
        <meta property="og:nodewave" content="Nodewave" key="nodewave" />
        <meta
          name="description"
          content="Make Your Own Website and Mobile Application With Nodewave"
          key="desc"
        />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Hero />
      </header>
      <main>
        <Product />
        <Testimoni />
        <Works />
        <Progress />
        <Applications />
        <Pricelist />
        <Footer />
      </main>
    </>
  );
}

export default Home;
