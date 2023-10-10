import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';

const navs = ['Website', 'Mobile Apps', 'Portfolio', 'Make an App'];

function Navbar() {
  const lastNavIndex = navs.length - 1;
  const id = useId();

  return (
    <section
      data-aos="fade-down"
      className="container relative z-[999] flex justify-between items-center py-7"
    >
      <Image
        className="max-w-full h-auto"
        quality={65}
        src="https://res.cloudinary.com/dvq5fmqpp/image/upload/w_500/q_auto/f_auto/v1696907336/nodewave/logo_qibqga.svg"
        width={226}
        height={44}
        alt="logo"
        priority
      />
      <label htmlFor="toggle-menu" className="block lg:hidden cursor-pointer">
        <div className="lg:hidden flex flex-col gap-y-2 group">
          <span className="w-10 h-[.15rem] bg-white rounded-full"></span>
          <span className="w-10 group-hover:w-5 h-[.1rem] bg-white rounded-full transition-all duration-300"></span>
          <span className="w-10 h-[.15rem] bg-white rounded-full"></span>
        </div>
      </label>

      <input id="toggle-menu" className="peer hidden" type="checkbox" />

      <ul className="hidden divide-y lg:divide-y-0 py-2 lg:py-0 flex-col lg:flex-row absolute w-full lg:w-auto lg:static top-[6rem] rounded-xl lg:rounded-none lg:top-0 bg-white lg:bg-transparent peer-checked:flex lg:flex lg:gap-x-[1.875rem] text-sm lg:text-xl items-center">
        {navs.map((nav, index) => (
          <li
            key={id + index}
            className="w-full lg:w-auto p-3 lg:p-0 text-center"
          >
            <Link
              className={
                index === lastNavIndex
                  ? 'btn w-[50%] lg:w-auto mx-auto lg:mx-0 rounded-full'
                  : 'text-text_secondary lg:text-white hover:text-primary lg:hover:text-text_secondary'
              }
              href={`#${nav}`}
            >
              {nav}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Navbar;
