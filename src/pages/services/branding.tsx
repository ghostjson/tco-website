import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import BoldHeading from 'src/components/BoldHeading';
import Layout from 'src/components/Layout';
import ServiceFooter from 'src/components/ServiceFooter';
import ServicePricing from 'src/components/ServicePricing';

const Branding = ({ title, description, pricing, footer }) => {
  return (
    <Layout>
      <NextSeo
        title='Brand Design'
        description='We create brand identities that shape consumer perception of your brand to help you stand out from your competitors.'
      />
      <div className='h-[50vh] xl:h-[80vh] relative flow-root bg-gradient-to-t from-[#5D8BA1] via-[#1D5F7B] to-[#175A77]'>
        <div className='absolute top-20 px-10 md:hidden'>
          <BoldHeading heading={title} />
          <p className='font-agaramondPro text-center text-white mt-5'>
            {description}
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
            {title}
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#3E7F6E] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg xl:text-xl text-center mt-0  pt-10 z-10 bg-white text-[#3E7F6E] hidden md:block'>
          {description}
        </p>
        <ServicePricing
          service1={{
            color: '#60B19C',
            ...pricing[0],
          }}
          service2={{
            color: '#3E7F6E',
            ...pricing[1],
          }}
        />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-tr from-[#5D8BA1] via-[#1D5F7B] to-[#175A77]'
        title={footer.Title}
        subtitle={footer.Subtitle}>
        <ReactMarkdown className='md:text-xl flex flex-col gap-5'>
          {footer.Content}
        </ReactMarkdown>
      </ServiceFooter>
    </Layout>
  );
};

export default Branding;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.CMS_URL}/services?Title=Brand%20Design`
  );
  const resolved = await res.json();
  const data: any = resolved[0];
  return {
    props: {
      title: data.Title,
      description: data.Description,
      pricing: data.pricing,
      footer: data.Footer[0],
    },
    revalidate: 60,
  };
}

// pricing data used in this page
