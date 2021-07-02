import React from 'react';

const ServiceItem = ({ title, color, price, desc, children }) => {
  const button = React.Children.map(children, (child) =>
    child.type.displayName === 'Button' ? child : null
  );
  return (
    <div className='flex flex-col justify-between'>
      <span>
        <h2
          className='text-4xl xl:text-5xl font-semibold mb-2'
          style={{ color: color }}>
          ${price}
        </h2>
        <h4 className='font-bold text-base xl:text-xl uppercase tracking-wider mb-0'>
          {title}
        </h4>
        <p className='xl:w-3/4'>{desc}</p>
      </span>
      {button}
    </div>
  );
};

export default ServiceItem;

const Button = ({ children }) => children;
Button.displayName = 'Button';
ServiceItem.Button = Button;
