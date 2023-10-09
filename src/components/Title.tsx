type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ className, children }: Props) {
  return (
    <h2
      data-aos="fade-down"
      data-aos-duration={800}
      className={`${className} font-semibold text-[2rem] text-center`}
    >
      {children}
    </h2>
  );
}

export default Title;
