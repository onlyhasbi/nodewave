import React from 'react';
import Title from './Title';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

function Works() {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration={800}
      className="container mt-[3.125rem]"
    >
      <Title className="mb-9">Our Works</Title>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="relative flex w-[90rem] gap-[1.875rem]"
      >
        <SwiperSlide className="!flex gap-x-5 items-center px-4 !w-[54.563rem] !h-[32.5rem] bg-[url('https://res.cloudinary.com/dvq5fmqpp/image/upload/w_600/q_auto/f_auto/v1696907314/nodewave/bg-app-01_zervd0.svg')] object-fill bg-cover bg-no-repeat">
          <Image
            src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_600/q_auto/f_auto/v1696907310/nodewave/app-01_lox5oy.svg"
            alt="app-01"
            width={557}
            height={329}
            quality={65}
          />
          <div className="space-y-1">
            <h3 className="text-[2rem] font-semibold indent-7">Rayu Motor</h3>
            <p className="text-xl">
              AC Service Workshop that has implemented online registration to
              make it easier for consumers, mechanics, and sales
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex gap-x-5 rounded-xl overflow-hidden items-center px-4 !w-[54.563rem] !h-[32.5rem] bg-[url('https://res.cloudinary.com/dvq5fmqpp/image/upload/w_600/q_auto/f_auto/v1696907315/nodewave/bg-app-02_jy5fqy.svg')] object-fill bg-cover bg-center  bg-no-repeat">
          <Image
            className="rounded-2xl"
            src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_600/q_auto/f_auto/v1696907312/nodewave/app-02_st2u3t.svg"
            alt="app-02"
            width={659}
            height={370}
            quality={65}
          />
          <div className="space-y-1">
            <h3 className="text-[2rem] font-semibold indent-7">Work 2</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              perferendis accusamus accusantium asperiores aperiam iusto
              similique quam porro a iure.
            </p>
            <Link href="#" className="block pt-2 hover:underline">
              Visit web
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Works;
