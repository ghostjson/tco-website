import Head from 'next/head';
import Layout from '../components/Layout';
import SocialIconBar from '../components/SocialIconBar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div>
        <main className='min-h-screen'>
          <div className='bg-gradient-to-tr from-[rgb(83,83,103)] to-[rgb(44,62,76)] p-8 min-h-[50vh] flex items-start justify-center pt-12  md:pt-24'>
            <img
              src='/images/main-logo.png'
              alt='main-logo'
              className='h-8 md:h-16'
            />
          </div>
          <div className='h-auto xl:min-h-[50vh] pt-32 md:pt-80 xl:pt-0 bg-white relative'>
            <div className='absolute top-3 right-1/2 translate-x-[48%] xl:translate-x-0 xl:right-0 transform -translate-y-1/2 w-[50rem] flex flex-col items-center'>
              <img
                src='/illustrations/women-illustration.svg'
                alt='women meditating'
                className=''
              />
              <div className='text-sm hidden xl:block'>
                <span>I want to:</span>
                <div className='flex space-x-6 text-white'>
                  <span className='py-1 px-6 bg-[#A5904F] rounded-full'>
                    Engage your services
                  </span>
                  <span className='py-1 px-6 bg-[#A5904F] rounded-full'>
                    Browse this site
                  </span>
                  <span className='py-1 pl-10 px-6 bg-[#A5904F] rounded-xl relative'>
                    <img
                      src='/icons/whatsapp-legacy.svg'
                      alt='whatsapp chat icon'
                      className='w-8 absolute -left-1 top-1/2 transform -translate-y-1/2'
                    />
                    Chat
                  </span>
                </div>
              </div>
            </div>
            <p className='font-agaramondPro md:text-xl w-full xl:w-1/2 p-8 md:p-32 text-center xl:text-left'>
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
        <div className='bg-black text-white p-16 px-8 xl:px-24 space-y-8 text-justify font-calibri'>
          <div className='flex justify-center xl:justify-between'>
            <h2 className='text-4xl uppercase tracking-wide py-2 border-b border-white'>
              Why Us
            </h2>
            <SocialIconBar className='hidden xl:flex' />
          </div>
          <p className='text-2xl tracking-wide'>
            The Creative Oracle understands both your business & design needs.
            We are specialised in helping businesses achieve their business
            goals through visual strategies.
          </p>
          <ul className='text-sm md:text-2xl w-full xl:w-1/2 space-y-4 list-inside list-disc'>
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
