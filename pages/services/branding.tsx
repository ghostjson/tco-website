import Layout from '@components/Layout';
import PriceChart from '@components/PriceChart';
import ServiceFooter from '@components/ServiceFooter';

const Branding = () => {
  return (
    <Layout>
      <div className='h-[60vh] md:h-[40vh] xl:h-[80vh] relative flow-root bg-gradient-to-t from-[#5D8BA1] via-[#1D5F7B] to-[#175A77]'>
        <img
          src='/images/main-logo.png'
          alt='main-logo'
          className='mt-14 mx-auto md:mt-16 h-6 md:h-10  md:ml-20'
        />
        <img
          src='/illustrations/branding-banner.svg'
          alt='branding banner'
          className='absolute hidden md:block -bottom-10 md:-bottom-20 xl:-bottom-50'
        />
        <img
          src='/illustrations/branding-banner.gif'
          alt='web banner'
          className='absolute top-20  right-0 bg-repeat md:hidden -z-10'
        />
      </div>
      <div className='mt-[10vh] xl:mt-0 flex flex-col items-center p-4 xl:p-16 bg-white z-10'>
        <span className='relative py-2 bg-white'>
          <h2 className='text-4xl uppercase font-semibold text-[#3E7F6E] text-center '>
            Brand Design
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#3E7F6E] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg xl:text-xl text-center mt-0  pt-10 z-10 bg-white text-[#3E7F6E]'>
          We create brand identities that shape consumer perception of your
          brand to help you stand out from your competitors.
        </p>
        <div className='flex w-full gap-3 justify-evenly items-start mt-16 px-4 xl:px-32 pb-32'>
          <PriceChart
            color='#60B19C'
            price='350'
            title='BASIC LOGO'
            desc='A customized logo deisgn suitable for businesses that need a simple logo solution.'
            steps={[
              'Contact us & register account',
              'Fill out an order form',
              'Make payment & project begins',
              'Select 1 of 2 logo design options',
              'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format)',
            ]}
          />
          <div className='h-96 w-1 bg-[#A9DED0] xl:mx-6 self-end hidden xl:block'></div>
          <PriceChart
            color='#3E7F6E'
            price='1750'
            title='CORPORATE BRAND'
            desc='A strategic brand identity design suitable for businesses that require a professional corporate image.'
            steps={[
              'Contact us & register account',
              'Fill out an order form',
              'Make payment & project begins',
              'Review brand strategy proposal & select 1of 3 logo design options',
              'Select 1 of 2 Corporate Identity design options. (Includes business card, letterhead & invoice design)',
              'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format. Full color business card, letterhead & invoice ddesign in AI & PDF format)',
            ]}
          />
        </div>
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-tr from-[#5D8BA1] via-[#1D5F7B] to-[#175A77]'
        title='Custom Brand Identity'
        price='750'>
        <p>
          A custom brand identity design is suitable form buisness targeting end
          consumers especially in F&B, online and offline retail & services with
          string competition
        </p>
        <p className='mt-6 text-lg md:text-xl'>
          This custom package may include a combination of designs suchh as
          strategic logo design, buiseness card & letterhead design, premiums,
          corporate invoice, slaes materials, packaging design, POS display &
          social media graphics
        </p>
        <p className='mt-6 text-lg md:text-xl'>
          Contact us for more information.
        </p>
      </ServiceFooter>
    </Layout>
  );
};

export default Branding;

const pricingData = [
  {
    color: '#60B19C',
    price: '350',
    title: 'BASIC LOGO',
    desc: 'A customized logo deisgn suitable for businesses that need a simple logo solution.',
  },
  {
    color: '#3E7F6E',
    price: '1750',
    title: 'CORPORATE BRAND',
    desc: 'A strategic brand identity design suitable for businesses that require a professional corporate image.',
  },
];

const stepData = [
  [
    'Contact us & register account',
    'Fill out an order form',
    'Make payment & project begins',
    'Select 1 of 2 logo design options',
    'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format)',
  ],
  [
    'Contact us & register account',
    'Fill out an order form',
    'Make payment & project begins',
    'Review brand strategy proposal & select 1of 3 logo design options',
    'Select 1 of 2 Corporate Identity design options. (Includes business card, letterhead & invoice design)',
    'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format. Full color business card, letterhead & invoice ddesign in AI & PDF format)',
  ],
];
