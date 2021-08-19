import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import BoldHeading from 'src/components/BoldHeading';
import Layout from 'src/components/Layout';
import ServiceFooter from 'src/components/ServiceFooter';
import ServicePricing from 'src/components/ServicePricing';

const Web = ({ title, description, pricing, footer }) => {
  return (
    <Layout>
      <NextSeo
        title='Web Design'
        description='We create “Smart Sites” that provide user data for your website to help you make better decisions for your business'
      />
      <div className='h-[50vh] xl:h-[60vh] relative flow-root bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F]'>
        <div className='absolute top-20 px-10 md:hidden'>
          <BoldHeading heading={title} />
          <p className='font-agaramondPro text-center text-white mt-5'>
            {description}
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
            {title}
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#5A4262] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg hidden xl:block xl:text-xl text-center mt-2 text-[#5A4262]'>
          {description}
        </p>
        {/* pricing of web services  */}
        <ServicePricing
          service1={{
            color: '#775681',
            ...pricing[0],
          }}
          service2={{
            color: '#5A4262',
            ...pricing[1],
          }}
        />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-br from-[#3F3858] via-[#524765] to-[#60516F]'
        title={footer.Title}
        subtitle={footer.Subtitle}>
        <ReactMarkdown className='md:text-xl flex flex-col gap-5'>
          {footer.Content}
        </ReactMarkdown>
      </ServiceFooter>
    </Layout>
  );
};

export default Web;

export async function getStaticProps() {
  const res = await fetch(`${process.env.CMS_URL}/services?Title=Web%20Design`);
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
