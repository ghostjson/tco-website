import Layout from '@components/Layout';
import PriceChart from '@components/PriceChart';
import ServiceFooter from '@components/ServiceFooter';
import ServicePricing from '@components/ServicePricing';

const Marketing = () => {
  return (
    <Layout>
      <div
        className='h-[30vh] md:h-[40vh] xl:h-[50vh] relative flow-root '
        style={{
          background:
            'linear-gradient(223.76deg, #C96226 6.81%, #CD8334 89.5%)',
        }}>
        <img
          src='/images/main-logo.png'
          alt='main-logo'
          className='mt-14 mx-auto md:mt-16 h-6 md:h-10  md:ml-20'
        />
        <img
          src='/illustrations/marketing-banner.svg'
          alt='marketing banner'
          className='absolute -bottom-1/4 xl:bottom-auto xl:top-[20%]'
        />
      </div>
      <div className='mt-[10vh] xl:mt-[45vh] flex flex-col items-center p-4 xl:p-16'>
        <span className='relative py-2'>
          <h2 className='text-4xl uppercase font-semibold text-[#3A7A98] text-center'>
            Marketing Design
          </h2>
          <div className='absolute h-0.5 w-1/4 bottom-0 bg-[#3A7A98] left-1/2 transform -translate-x-1/2 rounded-full'></div>
        </span>
        <p className='text-lg xl:text-xl text-center mt-2 text-[#3A7A98]'>
          We create marketing materials that communicates effectively to your
          target audiences in order to boost sales.
        </p>
        <ServicePricing service1={pricing1} service2={pricing2} />
      </div>
      {/* footer  */}
      <ServiceFooter
        className='bg-gradient-to-br from-[#C96226] to-[#CD8334]'
        title='Custom ArtWork'
        price='750'>
        <p>
          A custom artwork is suitable for organizations that have specifiic
          themes or concepts to convey to their audiences. It is also ideal for
          businesses that want to sell to customers effectively like running
          online campaigns or marketing events.
        </p>
        <p className='mt-6 md:text-xl'>Contact us for more information.</p>
      </ServiceFooter>
    </Layout>
  );
};

export default Marketing;

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
