import React from 'react';
import Title from './Title';
import Image from 'next/image';

function Progress() {
  return (
    <section className="mt-[5.938rem] pb-[2.313rem] w-full h-auto p-5 xl:p-0 xl:w-[94.5rem] xl:h-[41.563rem] bg-[url('/assets/bg-blue.png')] object-fill bg-cover  bg-no-repeat">
      <Title className="pb-[3.7rem] pt-[1.875rem]">How We Work</Title>
      <div
        data-aos="fade-down"
        data-aos-duration={800}
        className="mx-auto flex justify-center items-center rounded-2xl w-full h-auto xl:w-[48.313rem] xl:h-[31.375rem] bg-[url('/assets/bg-inner-black.png')] object-fill bg-cover  bg-no-repeat"
      >
        <div className="flex flex-wrap lg:flex-nowrap justify-center xl:justify-normal gap-y-10 xl:gap-y-0 gap-x-[3.125rem] p-[1.875rem]">
          <Image
            data-aos="fade-right"
            data-aos-duration={1200}
            className="block w-[18.063rem] h-[27.75rem]"
            src="/assets/chat.svg"
            alt="chat"
            width={18.063}
            height={27.75}
          />
          <div
            data-aos="fade-left"
            data-aos-duration={2 * 800}
            className="lg:text-left text-center"
          >
            <h3 className="text-xl font-semibold">Estimate</h3>
            <p className="text-xl mt-[0.813rem]">
              Estimate the cost of creating your application with us. Pricing is
              transparent at the start with a gradual payment method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;
