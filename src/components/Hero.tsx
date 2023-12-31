function Hero() {
  return (
    <section className="container mt-[7.938rem] mb-[9.66rem]">
      <div
        data-aos="fade-left"
        data-aos-duration={800}
        className="relative w-full md:w-4/6 md:mx-auto lg:mx-0 lg:w-[49rem] content-heading-icon"
      >
        <h1 className="text-3xl lg:text-5xl font-semibold leading-[3rem] lg:text-left text-center lg:leading-[4.5rem]">
          Make Your Own <br className="hidden lg:block" />
          Website and Mobile Application With Nodewave
        </h1>
      </div>
      <button
        data-aos="fade-left"
        data-aos-duration={1200}
        className="btn rounded-full text-xl mt-4 mb-8 lg:mx-0 mx-auto"
      >
        Get Started Now
      </button>
      <p
        data-aos="fade-up"
        className="block w-full lg:w-[59rem] text-lg lg:text-2xl text-center lg:text-left leading-9"
      >
        Create Mobile Applications and Websites for Companies or Your Business
        Have a transparent pricing, easy and straightforward development process
      </p>
    </section>
  );
}

export default Hero;
