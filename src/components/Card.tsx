import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  dataAos?: string;
  duration?: number;
};
function Card({ children, className, dataAos, duration }: Props) {
  return (
    <div
      data-aos={dataAos}
      data-aos-duration={duration}
      className={`${className} rounded-3xl border border-white border-width-2`}
    >
      {children}
    </div>
  );
}

export default Card;
