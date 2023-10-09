import React from 'react';
import Title from './Title';
import Image from 'next/image';
import Link from 'next/link';

function Works() {
  return (
    <section className="container mt-[3.125rem]">
      <Title className="mb-9">Our Works</Title>
      <ul className="relative flex w-[111rem] gap-[1.875rem]">
        <li
          data-aos="fade-left"
          data-aos-duration={800}
          className="flex gap-x-5 items-center px-4 w-[54.563rem] h-[32.5rem] bg-[url('/assets/bg-app-01.svg')] object-fill bg-cover  bg-no-repeat"
        >
          <Image
            src="/assets/app-01.svg"
            alt="app-01"
            width={557}
            height={329}
          />
          <div className="space-y-1">
            <h3 className="text-[2rem] font-semibold indent-7">Rayu Motor</h3>
            <p className="text-xl">
              AC Service Workshop that has implemented online registration to
              make it easier for consumers, mechanics, and sales
            </p>
          </div>
        </li>
        <li
          data-aos="fade-left"
          data-aos-duration={2 * 800}
          className="flex gap-x-5 rounded-xl overflow-hidden items-center px-4 w-[54.563rem] h-[32.5rem] bg-[url('/assets/bg-app-02.svg')] object-fill bg-cover bg-center  bg-no-repeat"
        >
          <Image
            className="rounded-2xl"
            src="/assets/app-02.svg"
            alt="app-02"
            width={659}
            height={370}
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
        </li>
      </ul>
    </section>
  );
}

export default Works;
