import React, { useEffect, useState } from 'react';
import ServiceItem from 'src/components/ServiceItem';
type PriceItem = {
  Price: string;
  Title: string;
  description: string;
  color?: string;
  step: {
    id: number;
    content: string;
    step: number;
  }[];
};

type ServicePricingProps = {
  service1: PriceItem;
  service2: PriceItem;
  available?: boolean;
};

const ServicePricing: React.FC<ServicePricingProps> = ({
  service1,
  service2,
  available = true,
}) => {
  const [active, setActive] = useState({ service1: false, service2: false });
  console.log(available);
  return (
    <div className='my-10 w-full md:px-24 self-center '>
      <div className='flex space-x-2'>
        <div className='flex flex-col justify-between w-3/4 md:pr-10'>
          <ServiceItem
            title={service1.Title}
            price={service1.Price}
            desc={service1.description}
            color={service1.color}
          />
          <button
            className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start transform scale-90 rounded-sm my-4'
            style={{ backgroundColor: service1.color }}
            onClick={() =>
              setActive((state) => ({ ...state, service1: !state.service1 }))
            }>
            How it Works
          </button>
        </div>
        <div className='flex flex-col justify-between w-3/4 md:pr-10'>
          <ServiceItem
            title={service2.Title}
            price={service2.Price}
            desc={service2.description}
            color={service2.color}
          />
          <button
            className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start transform scale-90 rounded-sm my-4'
            style={{ backgroundColor: service2.color }}
            onClick={() =>
              setActive((state) => ({ ...state, service2: !state.service2 }))
            }>
            How it Works
          </button>
        </div>
      </div>
      <div className='flex justify-between space-x-2'>
        <div className='flex flex-col items-start space-y-6 mt-8 w-1/2 xl:w-2/4 md:pr-10'>
          {active.service1 &&
            (available ? (
              service1.step.map((step, index) => {
                return (
                  <span
                    key={step.id}
                    className='relative px-2'
                    style={{ color: service1.color }}>
                    <h6 className='font-bold'>STEP {index + 1}</h6>
                    {step.content}
                    <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
                  </span>
                );
              })
            ) : (
              <div className='font-agaramondPro'>
                This service will be available shortly. <br /> Contact us for
                more details.
              </div>
            ))}
        </div>
        <div className='flex flex-col items-start space-y-6 mt-8 w-1/2 xl:w-2/4 md:pr-10'>
          {active.service2 &&
            (available ? (
              service2.step.map((step, index) => {
                return (
                  <span
                    key={step.id}
                    className='relative px-2'
                    style={{ color: service2.color }}>
                    <h6 className='font-bold'>STEP {index + 1}</h6>
                    {step.content}
                    <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
                  </span>
                );
              })
            ) : (
              <div className='font-agaramondPro'>
                This service will be available shortly. <br /> Contact us for
                more details.
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;
