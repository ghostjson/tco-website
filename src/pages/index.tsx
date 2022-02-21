import { useState, useContext, useEffect } from 'react';

import Layout from '@components/Layout';
import Pill from '@components/Pill';
import SocialIconBar from '@components/SocialIconBar';
// import UserActions from "@components/UserActions";
import { question } from '@customTypes/Chat';
import { getQuestionById } from '@utils/getQuestionById';
import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';
import ChatWindow from '@components/ChatWindow';

export default function Home({ content, footer, data }) {
  const { state, dispatch } = useContext(ChatContext);
  const [activeQ, setActiveQ] = useState<question>();

  // changing the active question local state as state in context changes
  useEffect(() => {
    setActiveQ(getQuestionById(state.questions, state.active_q));
  }, [state]);

  useEffect(() => {
    return () => {
      dispatch({ type: UPDATE_ACTIVE_QUESTION, payload: 1 });
    };
  }, []);

  return (
    <Layout>
      <div>
        <main className='overflow-x-hidden'>
          <div className='bg-gradient-to-tr from-[rgb(83,83,103)] to-[rgb(44,62,76)] p-8 min-h-[26rem] md:min-h-[35rem] xl:min-h-[40rem]  flex items-start justify-center pt-12  md:pt-24 relative'>
            <img
              src='/images/main-logo.png'
              alt='main-logo'
              className='h-8 md:h-14 mt-24 md:mt-0'
            />
            <img
              src='/illustrations/women-illustration-2.png'
              alt='women meditating'
              className='absolute -bottom-[1.1rem] md:-bottom-24 xl:-bottom-36 w-[70rem] md:w-[50rem] xl:w-[60rem] z-20 left-9 scale-125 md:scale-100'
            />
            {/* <Pill className='bg-[#E0E3D2] text-[.7rem] md:text-base absolute left-1 md:right-2/6 p-3 md:px-4 md:left-auto xl:md-auto xl:right-[25rem] 2xl:right-1/4 top-3/4 md:top-2/3 z-30  shadow-2xl max-w-[50vw] xl:max-w-md rounded-lg rounded-tr-none xl:rounded-full xl:rounded-tr-none'>
              {activeQ && activeQ.question}
            </Pill> */}
            <ChatWindow className='mx-auto absolute hidden xl:block z-30 left-[70rem] -bottom-full xl:top-1/2 rounded-xl border-none transform -translate-x-1/2 w-[90%] xl:w-[30rem]' />
          </div>
          <div className='min-h-[50vh] bg-white relative flex flex-col xl:flex-row-reverse pt-32 md:pt-24 py-16 px-6 md:px-16 justify-between space-y-8'>
            {/* <UserActions
              className='self-center z-30'
              choices={activeQ && activeQ.choices}
            /> */}
            <span> </span>
            {/* <p className='font-agaramondPro md:text-2xl w-full xl:w-1/2 text-center xl:text-left'>
                {content}
              </p> */}

            <ChatWindow className='mx-auto block xl:hidden xl:absolute -top-full z-30 rounded-xl border-none right-24 w-auto xl:w-[30rem]' />
            <a
              href='https://api.whatsapp.com/send?phone=6583337803'
              className='self-center xl:hidden'>
              <Pill className='bg-gray-800 rounded-xl relative px-6 py-1 pl-10 text-white text-sm xl:hidden'>
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
              {footer.Title}
              <span className='h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full'></span>
            </h2>
            <SocialIconBar className='hidden xl:flex' />
          </div>
          <p className='text-sm md:text-2xl tracking-wide'>{footer.Subtitle}</p>
          <ul className='text-sm md:text-2xl w-full xl:w-1/2 space-y-4 list-inside list-disc'>
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
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.CMS_URL}/homepage`);
  const data: any = await res.json();
  return {
    props: {
      data: data,
      content: data.content,
      footer: data.Footer[0],
    },
    revalidate: 60,
  };
}
