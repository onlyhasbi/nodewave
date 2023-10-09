import Image from 'next/image';
import Card from './Card';
import Title from './Title';
import { Rubik, Roboto } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['500'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

function Product() {
  return (
    <section className="container lg:w-[71.25rem] mt-[6.25rem] mb-[3.125rem]">
      <Title className="text-center mb-10">Product</Title>
      <div className="w-full grid lg:grid-cols-[24.25rem_43rem] lg:grid-rows-2 gap-11 justify-center">
        <Card
          dataAos="fade-right"
          duration={800}
          className="min-w-[13.75rem] py-5 lg:py-12 p-[1.5rem] cursor-pointer hover:bg-white group order-1 lg:order-none"
        >
          <div className="w-full flex gap-x-6 justify-center items-center">
            <Image
              className="self-start"
              src="./assets/mobile-apps.svg"
              alt="mobile-apps-icon"
              width={60}
              height={60}
            />
            <div className="space-y-2">
              <h3
                className={`${rubik.className} font-medium text-2xl group-hover:text-text_secondary`}
              >
                Mobile Apps
              </h3>
              <p
                className={`${roboto.className} group-hover:text-text_primary`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <Image
              className="self-end"
              src="./assets/arrow.svg"
              alt="arrow-icon"
              width={20}
              height={20}
            />
          </div>
        </Card>

        <Card
          dataAos="fade-left"
          duration={1000}
          className="row-span-2 bg-white flex flex-col justify-center items-center gap-y-8 p-[1.25rem] px-10"
        >
          <Image
            src="./assets/mobile-group.svg"
            alt="mobile-apps-icon"
            width={225.62}
            height={120}
          />
          <div className="space-y-2 text-center">
            <h3
              className={`${rubik.className} font-medium text-2xl text-black`}
            >
              Mobile Apps
            </h3>
            <p className={`${roboto.className} text-black`}>
              Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
              fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
              Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan
              fitur GPS.
            </p>
          </div>
          <button className="btn rounded-md">Pelajari Selengkapnya</button>
        </Card>

        <Card
          dataAos="fade-right"
          duration={1200}
          className="py-5 lg:py-12 p-[1.5rem] cursor-pointer transition duration-300 hover:bg-white group min-w-[13.75rem]"
        >
          <div className="flex justify-center items-center gap-x-6 ">
            <Image
              className="self-start"
              src="./assets/website.svg"
              alt="mobile-apps-icon"
              width={60}
              height={60}
            />
            <div className="space-y-2">
              <h3
                className={`${rubik.className} font-medium text-2xl group-hover:text-text_secondary`}
              >
                Website
              </h3>
              <p
                className={`${roboto.className} group-hover:text-text_primary`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <Image
              className="self-end"
              src="./assets/arrow.svg"
              alt="arrow-icon"
              width={20}
              height={20}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Product;
