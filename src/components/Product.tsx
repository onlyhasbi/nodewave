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
    <section className="container xl:w-[71.25rem] mt-[6.25rem] mb-[3.125rem]">
      <Title className="text-center mb-10">Product</Title>
      <div
        data-aos="fade-up"
        data-aos-duration={800}
        className="w-full grid xl:grid-cols-[24.25rem_auto] md:grid-cols-2 grid-rows-[1fr,auto] gap-10"
      >
        <Card className="xs:col-span-1 md:col-span-2 xl:col-span-1 md:row-span-1 xl:row-span-2 bg-white flex flex-col justify-center items-center gap-y-8 p-[1.25rem] px-10 xl:order-2">
          <Image
            src='https://res.cloudinary.com/dvq5fmqpp/image/upload/e_sharpen/w_250/q_auto/f_auto/v1696907348/nodewave/mobile-group_b590ny.svg'
            alt="mobile-apps-icon"
            width={225.62}
            height={120}
            quality={65}
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

        <Card className="min-w-[13.75rem] py-5 lg:py-12 p-[1.5rem] cursor-pointer bg-white group order-1 2xl:order-none">
          <div className="w-full flex gap-x-6 justify-center items-center">
            <Image
              className="self-start"
              src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_60/q_auto/f_auto/v1696907342/nodewave/mobile-apps_h8r3ow.svg"
              alt="mobile-apps-icon"
              width={60}
              height={60}
              quality={65}
            />
            <div className="space-y-2">
              <h3
                className={`${rubik.className} font-medium text-2xl text-text_secondary`}
              >
                Mobile Apps
              </h3>
              <p className={`${roboto.className} text-text_primary`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <Image
              className="self-end"
              src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907311/nodewave/arrow_a1fy9s.svg"
              alt="arrow-icon"
              width={20}
              height={20}
              quality={65}
            />
          </div>
        </Card>

        <Card className="py-5 lg:py-12 p-[1.5rem] cursor-pointer hover:bg-white group min-w-[13.75rem] order-2 2xl:order-1 scale-100 xl:scale-90 xl:hover:scale-100 xl:transition-transform xl:transform xl:duration-300">
          <div className="flex justify-center items-center gap-x-6 ">
            <Image
              className="self-start"
              src="https://res.cloudinary.com/dvq5fmqpp/image/upload/e_sharpen/w_60/q_auto/f_auto/v1696907303/nodewave/website_gqwhds.svg"
              alt="mobile-apps-icon"
              width={60}
              height={60}
              quality={65}
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
              src="https://res.cloudinary.com/dvq5fmqpp/image/upload/e_sharpen/w_20/q_auto/f_auto/v1696907311/nodewave/arrow_a1fy9s.svg"
              alt="arrow-icon"
              width={20}
              height={20}
              quality={65}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Product;
