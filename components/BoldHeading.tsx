const BoldHeading = ({
  heading,
  className,
}: {
  heading: string;
  className: string;
}) => {
  return (
    <span className={className}>
      <h2 className='text-3xl tracking-wide xl:text-5xl uppercase font-semibold text-white text-center font-calibri'>
        {heading}
        <span className='absolute -bottom-1 right-1/2 transform translate-x-1/2 bg-white h-0.5 rounded-full w-1/2'></span>
      </h2>
    </span>
  );
};

export default BoldHeading;
