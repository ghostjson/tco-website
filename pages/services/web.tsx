import BoldHeading from '@components/BoldHeading';
import Layout from '@components/Layout';
import ServiceFooter from '@components/ServiceFooter';
import ServicePricing from '@components/ServicePricing';

const Web = () => {
  return (
    <Layout>
      <div className='h-[50vh] xl:h-[60vh] relative flow-root bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F]'>
        <div className='absolute top-20 px-10 md:hidden'>
          <BoldHeading heading='Web Design' />
          <p className='font-agaramondPro text-center text-white mt-5'>
            We create “Smart Sites” that provide user data for your website to
            help you make better decisions for your business
          </p>
        </div>
        <img
          src='/illustrations/web-banner.svg'
          alt='web banner'
          className='absolute -bottom-1 md:-bottom-20 xl:-bottom-36'
        />
      </div>
      <div className='mt-0 xl:mt-[10vh] flex flex-col items-center p-4 xl:p-16'>
        <span className='relative py-2 hidden md:block'>
          <h2 className='text-4xl uppercase font-semibold text-[#5A4262] text-center'>
            Web Design
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#5A4262] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg hidden xl:block xl:text-xl text-center mt-2 text-[#5A4262]'>
          We create “Smart Sites” that provide user data for your website to
          help you make better decisions for your business
        </p>
        {/* pricing of web services  */}
        <ServicePricing service1={pricing1} service2={pricing2} />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F]'
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
          corporate invoice, sales materials, packaging design, POS display &
          social media graphics
        </p>
        <p className='mt-6 text-lg md:text-xl'>
          Contact us for more information.
        </p>
      </ServiceFooter>
    </Layout>
  );
};

export default Web;

// pricing data used in this page
const pricing1 = {
  color: '#775681',
  price: '850',
  title: 'BASIC Website',
  desc: 'A simple website suitable for businesses that manage web content on their own.',
  steps: [
    'Contact us & register account.',
    'Fill out an order form & purchase your domain and hosting.',
    'Make payment & project begins.',
    'Select 1 of 2 web design options.',
    'Project complete with handover.',
  ],
};

const pricing2 = {
  color: '#5A4262',
  price: '1850',
  title: 'Smart Site',
  desc: 'A dynamic website that captures the data of visitors suitable for businesses that want to track user behaviour',
  steps: [
    'Contact us & register account',
    'Fill out an order form(includes 1 year domain & hosting)',
    'Make payment & project begins',
    'Review web strategy proposal & select 1of 3 web design options',
    'Content Edits. (Max 2)',
    'Project complete with handover.',
  ],
};
