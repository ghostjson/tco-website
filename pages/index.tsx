import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Pill from '../components/Pill';
import SocialIconBar from '../components/SocialIconBar';
import UserActions from '../components/UserActions';

let easing = [0.175, 0.85, 0.42, 0.96];

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    transition: { duration: 0.7, ease: easing },
  },
  visible: { opacity: 1, scale: 1 },
};

const textVariants = {
  exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

export default function Home() {
  return (
    <Layout>
      <div>
        <main className='overflow-x-hidden'>
          <div className='bg-gradient-to-tr from-[rgb(83,83,103)] to-[rgb(44,62,76)] p-8 min-h-[50vh] md:min-h-[55vh] xl:min-h-[60vh]  flex items-start justify-center pt-12  md:pt-24 relative'>
            <motion.img
              initial='hidden'
              animate='visible'
              variants={variants}
              src='/images/main-logo.png'
              alt='main-logo'
              className='h-8 md:h-14'
            />
            <svg
              height='15'
              width='inherit'
              className='absolute -bottom-1 left-0 w-full'
            >
              <path
                d='M 00 15 q 200 -20 2000 0'
                stroke='#b4c3d0'
                strokeWidth='5'
                fill='white'
              />
            </svg>
            <img
              src='/illustrations/illus-bgline.svg'
              alt='illustration background stroke line'
              className='absolute -bottom-1.5  right-0 w-[48rem] z-10'
            />
            <motion.img
              initial='hidden'
              animate='visible'
              variants={variants}
              src='/illustrations/Untitled.svg'
              alt='women meditating'
              className='absolute -bottom-1/4 right-0 w-[40rem] z-20'
            />
            <Pill className='bg-[#E0E3D2] text-[.7rem] md:text-base absolute left-0 md:right-2/3 px-[.5rem] py-0.5 md:px-4 md:left-auto xl:right-1/4 top-3/4 md:top-2/3 z-30 shadow-lg'>
              Hello, How May I Help You?
            </Pill>
          </div>
          <div className='h-auto bg-white relative flex flex-col xl:flex-row-reverse pt-32 md:pt-24 py-16 px-6 md:px-16 justify-between space-y-8'>
            <UserActions className='self-center' />
            <motion.p
              initial='exit'
              animate='enter'
              exit='exit'
              variants={textVariants}
              className='font-agaramondPro md:text-xl w-full xl:w-1/2 text-center xl:text-left'
            >
              Welcome to The Creative Oracle! We are creatives that are
              passionate about design & consultants that practice sound business
              & marketing principles. We are inspired by both beauty and wisdom,
              thus we go beyond creating attractive imagery to formulating
              strategic design that is effective for your business. Our company
              firmly believe in the design principle that form follows function
              & good design yeilds tangible results. Connect with us to get to
              know more about us.
            </motion.p>
            <a
              href='https://api.whatsapp.com/send?phone=6583337803'
              className='self-center xl:hidden'
            >
              <Pill className='bg-gray-800 rounded-xl relative px-6 pl-10 text-white text-sm xl:hidden'>
                <img
                  src='/icons/whatsapp-legacy.svg'
                  alt='whatsapp chat icon'
                  className='w-10 absolute -left-1 top-1/2 transform -translate-y-1/2'
                />
                Chat
              </Pill>
            </a>
          </div>
        </main>
        <div className='bg-black text-white p-16 px-8 xl:px-24 space-y-8 text-justify font-calibri'>
          <div className='flex justify-center xl:justify-between'>
            <h2 className='text-4xl uppercase tracking-wide py-2 relative'>
              Why Us
              <span className='h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full'></span>
            </h2>
            <SocialIconBar className='hidden xl:flex' />
          </div>
          <p className='text-lg md:text-2xl tracking-wide'>
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
