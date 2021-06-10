type PriceChartType = {
  price: string;
  title: string;
  desc: string;
  color?: string;
  steps: string[];
};

const PriceChart = ({ price, title, desc, steps, color }: PriceChartType) => {
  return (
    <div className='flex flex-col items-start w-3/4'>
      <h2 className='text-5xl font-semibold mb-2' style={{ color: color }}>
        ${price}
      </h2>
      <h4 className='font-bold text-xl uppercase tracking-wider mb-0'>
        {title}
      </h4>
      <p className='w-3/4'>{desc}</p>
      <button
        className='text-white font-bold p-3 uppercase self-start rounded-sm my-4'
        style={{ backgroundColor: color }}
      >
        How it Works
      </button>
      <div className='flex flex-col items-start space-y-6 mt-8 w-2/4'>
        {steps.map((step, index) => {
          return (
            <span
              key={index}
              className='relative px-2'
              style={{ color: color }}
            >
              <h6 className='font-bold'>STEP {index + 1}</h6>
              {step}
              <div className='absolute rounded-full h-1 w-1 bg-current top-2.5 left-0'></div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PriceChart;
