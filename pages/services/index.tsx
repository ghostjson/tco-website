import Link from 'next/link';
import Layout from '@components/Layout';
import BoldHeading from '@components/BoldHeading';
import ServiceItem from '@components/ServiceItem';
import SocialIconBar from '@components/SocialIconBar';

const Services = () => {
  return (
    <Layout>
      <div className='relative'>
        <BoldHeading
          heading='services'
          className='absolute top-20 left-1/2 transform  -translate-x-1/2'
        />
        <img
          src='/illustrations/web-banner.svg'
          alt='web banner'
          className='hidden md:block bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F] pt-20'
        />
        <img
          src='/illustrations/web-banner.gif'
          alt='web banner'
          className='bg-repeat md:hidden z-10'
        />
      </div>
      {/* branding  */}
      <div className='relative mt-10'>
        <div className='absolute -top-10 right-1 w-44 scale-75'>
          <ServiceItem
            color='#5A4262'
            price='850'
            title='WEB Design'
            desc='We create “Smart Sites” that provide user data for your website to
            help you make better decisions for your business'>
            <ServiceItem.Button>
              <Link href='/services/web'>
                <button
                  className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
                  style={{ backgroundColor: '#5A4262' }}>
                  Find Out More
                </button>
              </Link>
            </ServiceItem.Button>
          </ServiceItem>
        </div>
        <img
          src='/illustrations/branding-banner.svg'
          alt='branding banner'
          className='hidden md:block'
        />
        <img
          src='/illustrations/branding-banner.gif'
          alt='web banner'
          className='bg-repeat md:hidden z-10'
        />
      </div>
      {/* marketing */}
      <div className='relative'>
        <div className='absolute -top-1/2 left-1 w-44 scale-75'>
          <ServiceItem
            color='#60B19C'
            price='350'
            title='Brand Design'
            desc='We create brand identities that shape consumer perception of your
            brand to help you stand out from your competitors.'>
            <ServiceItem.Button>
              <Link href='/services/branding'>
                <button
                  className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
                  style={{ backgroundColor: '#60B19C' }}>
                  Find Out More
                </button>
              </Link>
            </ServiceItem.Button>
          </ServiceItem>
        </div>
        <img
          src='/illustrations/marketing-banner.svg'
          alt='marketing banner'
          className='hidden md:block'
        />
        <img
          src='/illustrations/marketing-banner.gif'
          alt='web banner'
          className='bg-repeat md:hidden -z-10 -mt-32'
        />
        <div className='absolute -bottom-1/4 left-1 w-44 scale-75'>
          <ServiceItem
            color='#3A7A98'
            price='50'
            title='Marketing Design'
            desc='We create marketing materials that communicates effectively to your
            target audiences in order to boost sales.'>
            <ServiceItem.Button>
              <Link href='/services/marketing'>
                <button
                  className='text-sm xl:text-base text-white font-bold p-1.5 xl:p-3 uppercase self-start rounded-sm my-4'
                  style={{ backgroundColor: '#3A7A98' }}>
                  Find Out More
                </button>
              </Link>
            </ServiceItem.Button>
          </ServiceItem>
        </div>
      </div>
      <div className='pt-20 pb-16 px-2 flex flex-col items-center'>
        <div className='bg-gray-300 w-full h-64'></div>
        <h4 className='text-[1.7rem] font-bold text-center uppercase w-full'>
          The New Normal Economy
        </h4>
        <h6 className='font-semibold text-[.87rem] text-center'>
          Should you <span className='text-[#5bb3a6]'>increase</span> or{' '}
          <span className='text-[#e45e1b]'>cutback</span> on your marketing
          budget?
        </h6>
        <p className='text-xs text-justify'>
          Many people think it is a given to cut back on marketing dollars in
          times of economy crisis, however when majority of businesses do so,
          consumer messaging falls drastically and thus an opportunity for
          competitors to gain marketshare. So, what is the right move for you
          business and how much should you spend on marketing in this new
          normal? Take a 10-minute quiz below to find out.
        </p>
        <button className='bg-[#e45e1b] text-white p-2 uppercase mt-8 text-sm font-semibold'>
          Take a Quiz
        </button>
      </div>
      <div className='bg-black text-white p-16 px-8 xl:px-24 space-y-4 text-justify font-calibri'>
        <div className='flex justify-center xl:justify-between'>
          <h2 className='text-4xl uppercase tracking-wide py-2 relative'>
            Why Us
            <span className='h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full'></span>
          </h2>
          <SocialIconBar className='hidden xl:flex' />
        </div>
        <p className='text-sm md:text-xl tracking-wide'>
          The Creative Oracle understands both your business & design needs. We
          are specialised in helping businesses achieve their business goals
          through visual strategies.
        </p>
        <ul className='text-sm md:text-xl w-full xl:w-1/2 space-y-4 list-inside list-disc'>
          {whyUsList.map((listItem, index) => {
            return (
              <span key={index} className='flex'>
                <li></li>
                <span className='pl-4'>{listItem}</span>
              </span>
            );
          })}
        </ul>
        <SocialIconBar className='flex xl:hidden justify-end' />
      </div>
    </Layout>
  );
};

export default Services;

const whyUsList = [
  'We are both a design & business consultant agency, thus we create graphics strategically to boost your business.',
  'We have over 2 decades of experience working with businesses of various sizes, from start-ups to MNC.',
  'We provide a project management platform for you to track your progress with ease.',
  'We offer services that caters to all budgets.',
];