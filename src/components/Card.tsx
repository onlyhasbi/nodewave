import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};
function Card({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={`${className} rounded-3xl border outline-2 outline-white`}
    >
      {children}
    </div>
  );
}

export default Card;
