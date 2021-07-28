import BoldHeading from 'src/components/BoldHeading';
import Layout from 'src/components/Layout';
import ServiceFooter from 'src/components/ServiceFooter';
import ServicePricing from 'src/components/ServicePricing';

const Branding = () => {
  return (
    <Layout>
      <div className='h-[50vh] xl:h-[80vh] relative flow-root bg-gradient-to-t from-[#5D8BA1] via-[#1D5F7B] to-[#175A77]'>
        <div className='absolute top-20 px-10 md:hidden'>
          <BoldHeading heading='Brand Design' />
          <p className='font-agaramondPro text-center text-white mt-5'>
            We create brand identities that shape consumer perception of your
            brand to help you stand out from your competitors.
          </p>
        </div>
        <img
          src='/illustrations/branding-banner.svg'
          alt='branding banner'
          className='absolute -bottom-10 md:-bottom-20 xl:-bottom-50'
        />
      </div>
      <div className='mt-[10vh] xl:mt-0 flex flex-col items-center p-4 xl:p-16 bg-white z-10'>
        <span className='relative py-2 bg-white hidden md:block'>
          <h2 className='text-4xl uppercase font-semibold text-[#3E7F6E] text-center '>
            Brand Design
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#3E7F6E] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg xl:text-xl text-center mt-0  pt-10 z-10 bg-white text-[#3E7F6E] hidden md:block'>
          We create brand identities that shape consumer perception of your
          brand to help you stand out from your competitors.
        </p>
        <ServicePricing service1={pricing1} service2={pricing2} />
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

// pricing data used in this page
const pricing1 = {
  color: '#60B19C',
  price: '350',
  title: 'BASIC LOGO',
  desc: 'A customized logo deisgn suitable for businesses that need a simple logo solution.',
  steps: [
    'Contact us & register account',
    'Fill out an order form',
    'Make payment & project begins',
    'Select 1 of 2 logo design options',
    'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format)',
  ],
};

const pricing2 = {
  color: '#3E7F6E',
  price: '1750',
  title: 'CORPORATE BRAND',
  desc: 'A strategic brand identity design suitable for businesses that require a professional corporate image.',
  steps: [
    'Contact us & register account',
    'Fill out an order form',
    'Make payment & project begins',
    'Review brand strategy proposal & select 1of 3 logo design options',
    'Select 1 of 2 Corporate Identity design options. (Includes business card, letterhead & invoice design)',
    'Project complete with handover. (Full color, black & white logo in AI, JPG, PNG & PDF format. Full color business card, letterhead & invoice ddesign in AI & PDF format)',
  ],
};
