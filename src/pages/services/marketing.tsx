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
        <ServicePricing service1={pricing1} service2={pricing2} />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-br from-[#C96226] to-[#CD8334]'
        title={footer.Title}
        subtitle={footer.Subtitle}>
        {/* <p>
          A custom artwork is suitable for organizations that have specifiic
          themes or concepts to convey to their audiences. It is also ideal for
          businesses that want to sell to customers effectively like running
          online campaigns or marketing events.
        </p>
        <p className='mt-6 md:text-xl'>Contact us for more information.</p> */}
        {footer.Content}
      </ServiceFooter>
    </Layout>
  );
};

export default Marketing;

export async function getStaticProps() {
  console.log(
    `fetching to ${process.env.CMS_URL}/services?Title=Marketing%20Design`
  );

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

// pricing data used in this page
const pricing1 = {
  color: '#3A7B99',
  price: '50',
  title: 'Smart Template',
  desc: 'A downloadable template suitable for organizations that want a fast solution & able to edit content on their own.',
  steps: [
    'Register account & browse store.',
    'Purchase credits.',
    'Select template & download. (Editable artwork in PSD/EPS/PPT or DOC format).',
  ],
};

const pricing2 = {
  color: '#27566C',
  price: '350',
  title: 'Template Plus',
  desc: 'A template personalised by design professionals suit able for organizations that want an easy solution.',
  steps: [
    'Register account & browse store.',
    'Purchase credits.',
    'Select template & customize.',
    'Fill out form & project begins.',
    'Project complete with handover. (Editable artwork in PSD/EPS/PPT or DOC plus in PDF & JPG format.)',
  ],
};
