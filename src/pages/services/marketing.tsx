import ReactMarkdown from 'react-markdown';
import BoldHeading from 'src/components/BoldHeading';
import Layout from 'src/components/Layout';
import ServiceFooter from 'src/components/ServiceFooter';
import ServicePricing from 'src/components/ServicePricing';

const Marketing = ({ title, description, pricing, footer }) => {
  return (
    <Layout>
      <div
        className='h-[45vh] md:h-[30vh] xl:h-[50vh] relative flow-root '
        style={{
          background:
            'linear-gradient(223.76deg, #C96226 6.81%, #CD8334 89.5%)',
        }}>
        <div className='absolute top-20 px-10 md:hidden'>
          <BoldHeading heading={title} />
          <p className='font-agaramondPro text-center text-white mt-5'>
            {description}
          </p>
        </div>
        <img
          src='/illustrations/marketing-banner.svg'
          alt='marketing banner'
          className='absolute -bottom-1/4 md:-bottom-40 xl:bottom-auto xl:top-[20%]'
        />
      </div>
      <div className='mt-[10vh] md:mt-[20vh] xl:mt-[40vh] flex flex-col items-center p-4 xl:p-16'>
        <span className='relative py-2 hidden md:block'>
          <h2 className='text-4xl uppercase font-semibold text-[#3A7A98] text-center'>
            {title}
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#3A7A98] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg xl:text-xl text-center mt-2 text-[#3A7A98]  hidden md:block'>
          {description}
        </p>
        <ServicePricing
          service1={{
            color: '#3A7B99',
            ...pricing[0],
          }}
          service2={{
            color: '#27566C',
            ...pricing[1],
          }}
        />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-br from-[#C96226] to-[#CD8334]'
        title={footer.Title}
        subtitle={footer.Subtitle}>
        <ReactMarkdown className='md:text-xl flex flex-col gap-5'>
          {footer.Content}
        </ReactMarkdown>
      </ServiceFooter>
    </Layout>
  );
};

export default Marketing;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.CMS_URL}/services?Title=Marketing%20Design`
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
