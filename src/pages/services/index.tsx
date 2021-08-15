import Layout from 'src/components/Layout';
import BoldHeading from 'src/components/BoldHeading';
import ServiceItem from 'src/components/ServiceItem';
import SocialIconBar from 'src/components/SocialIconBar';
import QuizIntro from 'src/components/QuizIntro';

const Services = ({ web, brand, marketing, footer, quiz }) => {
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
        <div className='absolute -top-10 md:top-5 xl:top-0 right-1 md:right-10 w-44 scale-75 md:scale-100'>
          <ServiceItem
            color='#5A4262'
            price={web.Price}
            title={web.Title}
            desc={web.description}
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
        <div className='absolute -top-1/2 md:-top-72 left-1 md:left-10 xl:-top-24 w-44 scale-75 md:scale-100'>
          <ServiceItem
            color='#60B19C'
            price={brand.Price}
            title={brand.Title}
            desc={brand.description}
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
        <div className='absolute -bottom-1/4 md:bottom-0 xl:-bottom-1/4 left-1 md:left-10 w-48 scale-75 md:scale-100 xl:pt-40'>
          <ServiceItem
            color='#3A7A98'
            price={marketing.Price}
            title={marketing.Title}
            desc={marketing.description}
            link='/services/marketing'
          />
        </div>
      </div>

      {/* quiz intro section  */}
      <QuizIntro className='pt-32 pb-16 px-2 md:mt-10 xl:mt-80' data={quiz} />

      {/* footer  */}
      <div className='bg-black text-white p-16 px-8 xl:px-24 space-y-4 font-calibri'>
        <div className='flex justify-center xl:justify-between'>
          <h2 className='text-4xl uppercase tracking-wide py-2 relative'>
            {footer.Title}
            <span className='h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full'></span>
          </h2>
          <SocialIconBar className='hidden xl:flex' />
        </div>
        <p className='text-sm md:text-xl tracking-wide'>{footer.Subtitle}</p>
        <ul className='text-sm md:text-xl w-full xl:w-1/2 space-y-4 list-inside list-disc'>
          {footer.listElement.map((listItem) => {
            return (
              <span key={listItem.id} className='flex'>
                <li></li>
                <span className='pl-4'>{listItem.text}</span>
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

export async function getStaticProps() {
  const res = await fetch(`${process.env.CMS_URL}/services`);
  const footerRes = await fetch(`${process.env.CMS_URL}/homepage`);
  const quiz = await fetch(`${process.env.CMS_URL}/resource`);

  const data: any = await res.json();
  const footerData: any = await footerRes.json();
  const quizData: any = await quiz.json();

  return {
    props: {
      web: data[0].pricing[0],
      brand: data[1].pricing[0],
      marketing: data[2].pricing[0],
      footer: footerData.Footer[0],
      quiz: quizData.Quiz,
    },
    revalidate: 60,
  };
}

const whyUsList = [
  'We are both a design & business consultant agency, thus we create graphics strategically to boost your business.',
  'We have over 2 decades of experience working with businesses of various sizes, from start-ups to MNC.',
  'We provide a project management platform for you to track your progress with ease.',
  'We offer services that caters to all budgets.',
];
