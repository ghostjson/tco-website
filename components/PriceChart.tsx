import { useState } from 'react';
import ServiceItem from './ServiceItem';
type PriceChartType = {
  price: string;
  title: string;
  desc: string;
  color?: string;
  steps: string[];
};

const PriceChart = ({ price, title, desc, steps, color }: PriceChartType) => {
  const [showPricing, setShowPricing] = useState<boolean>(false);
  return (
    <div className='flex flex-col items-start w-3/4'>
      <ServiceItem title={title} price={price} desc={desc} color={color} />
      {true && (
        <div className='flex flex-col items-start space-y-6 mt-8 xl:w-2/4'>
          {steps.map((step, index) => {
            return (
              <span
                key={index}
                className='relative px-2'
                style={{ color: color }}>
                <h6 className='font-bold'>STEP {index + 1}</h6>
                {step}
                <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PriceChart;
