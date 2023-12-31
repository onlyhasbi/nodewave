import React from 'react';
import Title from './Title';
import Image from 'next/image';

function Pricelist() {
  return (
    <section className="container mt-[6.25rem]">
      <Title className="mb-[1.875rem]">
        Start Creating Websites or Mobile Apps For You Now
      </Title>
      <div className="flex gap-x-[6.25rem] gap-y-10 2xl:gap-y-0 flex-wrap justify-center">
        <div
          data-aos="fade-left"
          data-aos-duration={1000}
          className="flex xl:flex-row flex-col bg-white rounded-[.625rem] w-[32.813rem] h-[30rem] xl:h-[21.125rem] overflow-hidden"
        >
          <Image
            className="block w-full xl:w-[15.125rem] h-[15rem] xl:h-auto xl:object-cover order-1 xl:order-2"
            src="https://res.cloudinary.com/dvq5fmqpp/image/upload/e_sharpen/w_350/q_auto/f_auto/v1696907323/nodewave/code-screen_z35xcc.png"
            quality={65}
            width={242}
            height={338}
            alt="website-image"
          />

          <div className="w-full flex justify-center items-center order-2 xl:order-1 p-5 xl:p-0">
            <div className="relative h-[13rem] xl:h-[15rem] text-center">
              <h2 className="text-text_secondary  text-[2rem] font-semibold mb-[1.25rem]">
                Website
              </h2>
              <h3 className="text-text_secondary text-xl font-semibold mb-2">
                Start from
              </h3>
              <ul className="space-y-1">
                <li className="line-through text-red-600 text-sm font-medium relative discount">
                  <span className="text-text_disabled">Rp. 1.000.000</span>
                </li>
                <li className="text-text_secondary text-sm font-medium">
                  Rp. 500.000
                </li>
              </ul>
              <button className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[10.5rem] mt-auto btn primary rounded-full text-sm">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration={1500}
          className="flex xl:flex-row flex-col bg-white rounded-[.625rem] w-[32.813rem] h-[30rem] xl:h-[21.125rem] overflow-hidden"
        >
          <Image
            className="block w-full xl:w-[15.125rem] h-[15rem] xl:h-auto xl:object-cover order-1 xl:order-2"
            src="https://res.cloudinary.com/dvq5fmqpp/image/upload/e_sharpen/w_350/q_auto/f_auto/v1696907341/nodewave/mobile-apps_trshpp.png"
            width={242}
            height={338}
            quality={65}
            alt="website-image"
          />
          <div className="w-full flex justify-center items-center p-5 xl:p-0 order-2 xl:order-1">
            <div className="relative h-[13rem] xl:h-[15rem] text-center">
              <h2 className="text-text_secondary  text-[2rem] font-semibold mb-[1.25rem]">
                Mobile Apps
              </h2>
              <h3 className="text-text_secondary text-xl font-semibold mb-2">
                Start from
              </h3>
              <div className="text-text_secondary text-sm font-medium">
                Rp. 999.000
              </div>
              <button className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[10.5rem] mt-auto btn primary rounded-full text-sm">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricelist;
