import Layout from '@components/Layout';
import BoldHeading from '@components/BoldHeading';
import ServiceItem from '@components/ServiceItem';
import SocialIconBar from '@components/SocialIconBar';
import QuizIntro from '@components/QuizIntro';

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
          className='hidden xl:block bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F] pt-20'
        />
        <img
          src='/illustrations/web-banner.gif'
          alt='web banner'
          className='bg-repeat xl:hidden z-10'
        />
      </div>

      {/* web service info  */}
      <div className='relative mt-10'>
        <div className='absolute -top-10 md:top-5 right-1 md:right-4 w-44 scale-75 md:scale-100'>
          <ServiceItem
            color='#5A4262'
            price='850'
            title='WEB Design'
            desc='We create “Smart Sites” that provide user data for your website to
            help you make better decisions for your business'
            link='/services/web'
          />
        </div>
        <img
          src='/illustrations/branding-banner.svg'
          alt='branding banner'
          className='hidden xl:block xl:pt-40'
        />
        <img
          src='/illustrations/branding-banner.gif'
          alt='web banner'
          className='bg-repeat xl:hidden z-10'
        />
      </div>
      {/* brand design service info */}
      <div className='relative'>
        <div className='absolute -top-1/2 md:-top-72 left-1 md:left-4 w-44 scale-75 md:scale-100'>
          <ServiceItem
            color='#60B19C'
            price='350'
            title='Brand Design'
            desc='We create brand identities that shape consumer perception of your
            brand to help you stand out from your competitors.'
            link='/services/branding'
          />
        </div>
        <img
          src='/illustrations/marketing-banner.svg'
          alt='marketing banner'
          className='hidden xl:block xl:pt-40'
        />
        <img
          src='/illustrations/marketing-banner.gif'
          alt='web banner'
          className='bg-repeat xl:hidden -z-10 -mt-40 md:-mt-96'
        />
        {/* marketing design service info  */}
        <div className='absolute -bottom-1/4 md:bottom-0 left-1 md:left-4 w-44 scale-75 md:scale-100 xl:pt-40'>
          <ServiceItem
            color='#3A7A98'
            price='50'
            title='Marketing Design'
            desc='We create marketing materials that communicates effectively to your
            target audiences in order to boost sales.'
            link='/services/marketing'
          />
        </div>
      </div>
      {/* quiz intro section  */}
      <QuizIntro className='pt-32 pb-16 px-2 md:mt-10' />

      {/* footer  */}
      <div className='bg-black text-white p-16 px-8 xl:px-24 space-y-4 font-calibri'>
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
