import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div>
        <main className='min-h-screen'>
          <div className='bg-gradient-to-tr from-[rgb(83,83,103)] to-[rgb(44,62,76)] p-8 h-[50vh] flex items-start justify-center pt-24'>
            <img src='assets/main-logo.png' alt='main-logo' className='h-16' />
          </div>
          <div className='h-full bg-white relative'>
            <img
              src='/assets/women-illstration.svg'
              alt='women meditating'
              className='absolute -top-3 right-0 transform -translate-y-1/2 w-[50rem] '
            />
            <p className='font-agaramondPro text-xl w-1/2  '>
              Welcome to The Creative Oracle! We are creatives that are
              passionate about design & consultants that practice sound business
              & marketing principles. We are inspired by both beauty and wisdom,
              thus we go beyond creating attractive imagery to formulating
              strategic design that is effective for your business. Our company
              firmly believe in the design principle that form follows function
              & good design yeilds tangible results. Connect with us to get to
              know more about us.
            </p>
          </div>
        </main>
        <div className='bg-black text-white p-16 px-24 space-y-8 text-justify font-calibri'>
          <div className='flex justify-between'>
            <h2 className=' text-4xl uppercase tracking-wide py-2 border-b border-white'>
              Why Us
            </h2>
            {/* social icons go here  */}
          </div>
          <p className='text-2xl tracking-wide'>
            The Creative Oracle understands both your business & design needs.
            We are specialised in helping businesses achieve their business
            goals through visual strategies.
          </p>
          <ul className='text-2xl w-1/2 space-y-4 list-inside list-disc'>
            {whyUsList.map((listItem, index) => {
              return (
                <span key={index} className='flex'>
                  <li></li>
                  <span className='pl-4'>{listItem}</span>
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

const whyUsList = [
  'We are both a design & business consultant agency, thus we create graphics strategically to boost your business.',
  'We have over 2 decades of experience working with businesses of various sizes, from start-ups to MNC.',
  'We provide a project management platform for you to track your progress with ease.',
  'We offer services that caters to all budgets.',
];
