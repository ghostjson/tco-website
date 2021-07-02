import SocialIconBar from './SocialIconBar';

const Footer = () => {
  return (
    <footer className='bg-black text-white p-16 px-8 xl:px-24 space-y-8 text-justify font-calibri'>
      <div className='flex justify-center xl:justify-between'>
        <h2 className='text-4xl uppercase tracking-wide py-2 relative'>
          Why Us
          <span className='h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full'></span>
        </h2>
        <SocialIconBar className='hidden xl:flex' />
      </div>
      <p className='text-lg md:text-2xl tracking-wide'>
        The Creative Oracle understands both your business & design needs. We
        are specialised in helping businesses achieve their business goals
        through visual strategies.
      </p>
      <ul className='text-sm md:text-2xl w-full xl:w-1/2 space-y-4 list-inside list-disc'></ul>
      <SocialIconBar className='flex xl:hidden justify-end' />
    </footer>
  );
};

export default Footer;
