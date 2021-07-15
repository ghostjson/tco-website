import Link from 'next/link';
import React from 'react';

type ServiceItemProps = {
  title: string;
  color: string;
  price: number | string;
  desc: string;
  callback?: (fn: () => void) => void;
  link?: string;
};

// ServiceItem component
const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  color,
  price,
  desc,
  link,
  callback,
}) => {
  return (
    <div className='flex flex-col justify-between'>
      <span>
        <h2
          className='text-4xl xl:text-5xl font-semibold mb-2'
          style={{ color: color }}>
          ${price}
        </h2>
        <h4 className='font-bold font-calibri text-base xl:text-xl uppercase tracking-wider mb-0'>
          {title}
        </h4>
        <p className='xl:w-3/4 font-agaramondPro'>{desc}</p>
      </span>
      {link && (
        <Link href={link}>
          <button
            className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
            style={{ backgroundColor: color }}>
            Find Out More
          </button>
        </Link>
      )}
    </div>
  );
};

export default ServiceItem;
