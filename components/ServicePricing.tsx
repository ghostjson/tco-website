import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
type PriceItem = {
  price: string;
  title: string;
  desc: string;
  color?: string;
  steps: string[];
};

type ServicePricingProps = {
  service1: PriceItem;
  service2: PriceItem;
};

const ServicePricing: React.FC<ServicePricingProps> = ({
  service1,
  service2,
}) => {
  const [active, setActive] = useState({ service1: false, service2: false });
  return (
    <div className='my-10'>
      <div className='flex space-x-2'>
        <div className='flex flex-col justify-between w-3/4'>
          <ServiceItem
            title={service1.title}
            price={service1.price}
            desc={service1.desc}
            color={service1.color}
          />
          <button
            className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
            style={{ backgroundColor: service1.color }}
            onClick={() =>
              setActive((state) => ({ ...state, service1: !state.service1 }))
            }>
            How it Works
          </button>
        </div>
        <div className='flex flex-col justify-between w-3/4'>
          <ServiceItem
            title={service2.title}
            price={service2.price}
            desc={service2.desc}
            color={service2.color}
          />
          <button
            className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
            style={{ backgroundColor: service2.color }}
            onClick={() =>
              setActive((state) => ({ ...state, service2: !state.service2 }))
            }>
            How it Works
          </button>
        </div>
      </div>
      <div className='flex justify-between space-x-2'>
        <div className='flex flex-col items-start space-y-6 mt-8 w-1/2 xl:w-2/4'>
          {active.service1 &&
            service1.steps.map((step, index) => {
              return (
                <span
                  key={index}
                  className='relative px-2'
                  style={{ color: service1.color }}>
                  <h6 className='font-bold'>STEP {index + 1}</h6>
                  {step}
                  <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
                </span>
              );
            })}
        </div>
        <div className='flex flex-col items-start space-y-6 mt-8 w-1/2 xl:w-2/4'>
          {active.service2 &&
            service2.steps.map((step, index) => {
              return (
                <span
                  key={index}
                  className='relative px-2'
                  style={{ color: service2.color }}>
                  <h6 className='font-bold'>STEP {index + 1}</h6>
                  {step}
                  <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;
