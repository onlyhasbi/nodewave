import Image from 'next/image';
import React from 'react';

const icons = ['facebook', 'twitter', 'youtube', 'linkedin', 'instagram'];

function Footer() {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration={1000}
      className="text-center pt-[4.75rem] pb-[2.688rem]"
    >
      <Image
        className="block mx-auto mb-[1.875rem]"
        src="/assets/logo.svg"
        alt="footer-logo"
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
              src={`/assets/${icon}.svg`}
              alt="social-media-icon"
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
