import React from 'react';
import Title from './Title';
import Image from 'next/image';

const apps = [
  {
    img: '/assets/list-icon.svg',
    title: 'Online Attendance',
    description: `With the times, your team may be able to work in the office or
    outside the office. Get the accuracy of your team's work hours
    with your own company's special online attendance feature with
    features such as:`,
    lists: [
      'Clock in and Clock Out attendance',
      'Face Photo',
      'Face Recognition',
      'Accurate time stamp down to seconds',
      'GPS location of employees',
    ],
  },
  {
    img: '/assets/basket-ball-icon.svg',
    title: 'Sport Center',
    description: `Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to`,
    lists: [
      'Choose a booking schedule',
      'Online payments',
      'Automatic scheduling system ',
      'Search for Friends feature',
      'Split Payment with team members',
      'Information and announcements from you',
    ],
  },
  {
    img: '/assets/book-icon.svg',
    title: 'Booking',
    description: `Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:`,
    lists: [
      'Memilih jenis dan kategori jasa yang dikehendaki',
      'Melakukan reservasi online dan pembayaran dengan metode pembayaran digital',
      'Penjadwalan dengan tim lapangan',
      'Aplikasi khusus untuk tim',
      'Promosi dan Kode voucher khusus',
    ],
  },
];

const products = [
  { icon: '/assets/market-icon.svg', title: 'E-Commerce' },
  { icon: '/assets/company-icon.svg', title: 'Company Profile' },
  { icon: '/assets/cashier-icon.svg', title: 'Cashier' },
  { icon: '/assets/chat-icon.svg', title: 'Chat' },
  { icon: '/assets/workshop-icon.svg', title: 'Workshop' },
  { icon: '/assets/construction-icon.svg', title: 'Construction' },
  { icon: '', title: 'and many others' },
];

function Applications() {
  return (
    <section className="container">
      <Title className="pt-[2.063rem] pb-[3.125rem]">
        Applications that can be made
      </Title>
      <div className="flex flow-row lg:gap-x-4 gap-y-10 xl:gap-y-0 flex-wrap">
        {apps.map(({ img, title, description, lists }, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration={index * 800}
            className="flex-1 min-w-[20rem]"
            key={`apps-${index}`}
          >
            <div className="flex items-center gap-x-5 mb-[1.313rem]">
              <Image src={img} alt={`${title}-icon`} width={50} height={50} />
              <h3 className="font-semibold text-xl">{title}</h3>
            </div>
            <div className="flex flex-col gap-y-[1.313rem]">
              <p>{description}</p>
              <ul className="list-disc px-4">
                {lists.map((item, index) => (
                  <li key={`item-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-x-5 gap-y-10 xl:gap-y-0 flex-wrap justify-center mt-[3.125rem]">
        {products.map(({ icon, title }, index) => (
          <div
            data-aos="fade-left"
            data-aos-duration={index * 500}
            key={`product-${index}`}
            className="flex gap-x-[.625rem] flex-col w-2/5 lg:w-auto lg:flex-row items-center"
          >
            {Boolean(icon) ? (
              <Image src={icon} alt={`icon-${title}`} width={45} height={45} />
            ) : null}
            <h4 className="text-lg lg:text-left text-center font-semibold">
              {title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Applications;
