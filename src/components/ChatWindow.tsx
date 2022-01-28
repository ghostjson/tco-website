import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { welcomeMessage } from 'src/constants/quiz-message';

import UserActions from '@components/UserActions';
import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';
import BotBubble from './BotBubble';
import { getQuestionById } from '@utils/getQuestionById';
import { question } from '@customTypes/Chat';
import UserBubble from './UserBubble';

const ChatWindow = ({ closeAction }) => {
  const windowRef = useRef<HTMLDivElement>();
  const { state, dispatch } = useContext(ChatContext);
  const [activeQ, setActiveQ] = useState<question>(
    getQuestionById(state.questions, state.active_q)
  );
  const [messagequeue, setMessagequeue] = useState<React.ReactNode[]>([
    <BotBubble message={welcomeMessage} />,
  ]);

  useEffect(() => {
    return () => {
      dispatch({ type: UPDATE_ACTIVE_QUESTION, payload: 1 });
    };
  }, []);

  useEffect(() => {
    setActiveQ(getQuestionById(state.questions, state.active_q));
  }, [state.active_q]);

  useEffect(() => {
    setMessagequeue((messagequeue) => [
      ...messagequeue,
      <BotBubble message={activeQ.question} />,
      <UserBubble choices={activeQ.choices} />,
    ]);
  }, [activeQ]);
  useEffect(() => {
    windowRef.current.scrollTo(0, windowRef.current.scrollHeight);
    console.log('scrolling', windowRef.current.scrollHeight);
  }, [messagequeue]);
  return (
    <div className='h-[32rem] md:h-96 w-96 md:w-80 border-2 border-[#394566] bg-[#f0efea] flex flex-col '>
      <div className='font-bold py-1 px-3 w-full uppercase bg-[#394566] text-white flex items-center justify-between'>
        <span className='font-calibri text-sm'>Chat Window</span>
        <AiOutlineClose className='cursor-pointer' onClick={closeAction} />
      </div>
      <div className='p-4 flex items-center space-x-3 bg-white'>
        <div className='rounded-full relative p-2  bg-[#394566]' tabIndex={-1}>
          <img src='/images/tco-logo.png' className='w-8 h-8' />
          <div className='absolute w-3 h-3 rounded-full bg-[#0095ff] right-0 bottom-0'></div>
        </div>
        <span className='font-calibri text-lg'>The Creative Oracle</span>
      </div>
      <div
        className='overflow-x-hidden overflow-y-scroll py-4 scroll-smooth'
        ref={windowRef}>
        {messagequeue.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;