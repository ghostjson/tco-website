import { useState } from 'react';
import ServiceItem from './ServiceItem';

type pricingDataType = {
  color: string;
  price: number | string;
  title: string;
  desc: string;
};

type stepDataType = { color: string; steps: string[] };
type pricingPropType = {
  pricingData: pricingDataType[];
  stepData: stepDataType[];
};

type activeType = { [index: number]: boolean };

const Pricing: React.FC<pricingPropType> = ({ pricingData, stepData }) => {
  const [isActive, setActive] = useState<activeType>({});
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        {pricingData.map((data, index) => (
          <ServiceItem
            key={index}
            title={data.title}
            price={data.price}
            desc={data.desc}
            color={data.color}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        {stepData.map((data, key) => (
          <div>
            {data.steps.map((step) => (
              <span
                key={key}
                className='relative px-2'
                style={{ color: data.color }}>
                <h6 className='font-bold'>STEP {key + 1}</h6>
                {step}
                <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
