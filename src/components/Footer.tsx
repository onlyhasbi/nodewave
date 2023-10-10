import Image from 'next/image';
import React from 'react';

const icons = [
  'https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907329/nodewave/facebook_tmf0ew.svg',
  'https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907303/nodewave/twitter_uqq6cn.svg',
  'https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907307/nodewave/youtube_jtsqbn.svg',
  'https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907333/nodewave/linkedin_xuh3po.svg',
  'https://res.cloudinary.com/dvq5fmqpp/image/upload/w_20/q_auto/f_auto/v1696907332/nodewave/instagram_o10pky.svg',
];

function Footer() {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration={1000}
      className="text-center pt-[4.75rem] pb-[2.688rem]"
    >
      <Image
        className="block mx-auto mb-[1.875rem]"
        src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_250/q_auto/f_auto/v1696907336/nodewave/logo_qibqga.svg"
        alt="footer-logo"
        quality={65}
        width={226}
        height={44}
      />
      <h2 className="text-xl font-semibold">PT NODEWAVE SOLUSI TEKNOLOGI</h2>

      <section className="mt-[2.813rem] mb-[3.438rem]">
        <p className="text-xl font-semibold ">
          Graha Pena Surabaya
          <br />
          Jl. Ahmad Yani no. 88 Surabaya
          <br />
          Phone : +62811258280
          <br />
          Email : support@nodewave.id
        </p>
      </section>

      <ul className="flex justify-center gap-x-5">
        {icons.map((icon, index) => (
          <li key={`icon-${index}`}>
            <Image
              src={icon}
              alt="social-media-icon"
              quality={65}
              width={20}
              height={20}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
