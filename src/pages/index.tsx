import { useState, useContext, useEffect } from "react";
import Layout from "@components/Layout";
import Pill from "@components/Pill";
import SocialIconBar from "@components/SocialIconBar";
import UserActions from "@components/UserActions";
import { question } from "@customTypes/Chat";
import { getElementById } from "@utils/getElementById";
import { ChatContext, UPDATE_ACTIVE_QUESTION } from "@contexts/Chat";

export default function Home({ content, footer, data }) {
  const { state, dispatch } = useContext(ChatContext);
  const [activeQ, setActiveQ] = useState<question>();

  // changing the active question local state as state in context changes
  useEffect(() => {
    setActiveQ(getElementById(state.questions, state.active_q));
  }, [state]);

  useEffect(() => {
    return () => {
      dispatch({ type: UPDATE_ACTIVE_QUESTION, payload: 1 });
    };
  }, []);

  return (
    <Layout>
      <div>
        <main className="overflow-x-hidden">
          <div className="bg-gradient-to-tr from-[rgb(83,83,103)] to-[rgb(44,62,76)] p-8 min-h-[50vh] md:min-h-[55vh] xl:min-h-[60vh]  flex items-start justify-center pt-12  md:pt-24 relative">
            <img
              src="/images/main-logo.png"
              alt="main-logo"
              className="h-8 md:h-14"
            />
            <svg height="15" className="absolute -bottom-1 left-0 w-full">
              <path
                d="M 00 15 q 200 -20 2000 0"
                stroke="#b4c3d0"
                strokeWidth="5"
                fill="white"
              />
            </svg>
            <img
              src="/illustrations/illus-bgline.svg"
              alt="illustration background stroke line"
              className="absolute -bottom-1.5  right-0 w-[48rem] md:w-[38rem] xl:w-[48rem] z-10"
            />
            <img
              src="/illustrations/women-illustration.png"
              alt="women meditating"
              className="absolute -bottom-28 xl:-bottom-52 -right-4 w-[40rem] md:w-[32rem] xl:w-[40rem] z-20"
            />
            <Pill className="bg-[#E0E3D2] text-[.7rem] md:text-base absolute left-1 md:right-2/6 p-3 md:px-4 md:left-auto xl:md-auto xl:right-[25rem] 2xl:right-1/4 top-3/4 md:top-2/3 z-30  shadow-2xl max-w-[50vw] xl:max-w-md rounded-lg rounded-tr-none xl:rounded-full xl:rounded-tr-none">
              {activeQ && activeQ.question}
            </Pill>
          </div>
          <div className="h-auto bg-white relative flex flex-col xl:flex-row-reverse pt-32 md:pt-24 py-16 px-6 md:px-16 justify-between space-y-8">
            <UserActions
              className="self-center z-30"
              choices={activeQ && activeQ.choices}
            />
            <p className="font-agaramondPro md:text-2xl w-full xl:w-1/2 text-center xl:text-left">
              {content}
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6583337803"
              className="self-center xl:hidden">
              <Pill className="bg-gray-800 rounded-xl relative px-6 py-1 pl-10 text-white text-sm xl:hidden">
                <img
                  src="/icons/whatsapp-legacy.svg"
                  alt="whatsapp chat icon"
                  className="w-10 absolute -left-1 top-1/2 transform -translate-y-1/2"
                />
                Chat
              </Pill>
            </a>
          </div>
        </main>
        <div className="bg-black text-white p-16 px-8 xl:px-24 space-y-8 text-justify font-calibri">
          <div className="flex justify-center xl:justify-between">
            <h2 className="text-4xl uppercase tracking-wide py-2 relative">
              {footer.Title}
              <span className="h-[2px] bg-white absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 rounded-full"></span>
            </h2>
            <SocialIconBar className="hidden xl:flex" />
          </div>
          <p className="text-sm md:text-2xl tracking-wide">{footer.Subtitle}</p>
          <ul className="text-sm md:text-2xl w-full xl:w-1/2 space-y-4 list-inside list-disc">
            {footer.listElement.map((listItem) => {
              return (
                <span key={listItem.id} className="flex">
                  <li></li>
                  <span className="pl-4">{listItem.text}</span>
                </span>
              );
            })}
          </ul>
          <SocialIconBar className="flex xl:hidden justify-end" />
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
