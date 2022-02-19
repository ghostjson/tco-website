import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { welcomeMessage } from 'src/constants/quiz-message';
import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';
import BotBubble from './BotBubble';
import { getQuestionById } from '@utils/getQuestionById';
import { question } from '@customTypes/Chat';
import UserBubble from './UserBubble';

const ChatWindow = ({
  closeAction,
  className,
}: {
  closeAction?: () => void;
  className?: string;
}) => {
  const windowRef = useRef<HTMLDivElement>();
  const { state, dispatch } = useContext(ChatContext);
  const [activeQ, setActiveQ] = useState<question>(
    getQuestionById(state.questions, state.active_q)
  ); // holds all messages
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

  //handlling the scroll to bottom of the chat window
  useEffect(() => {
    windowRef.current.scrollTo(0, windowRef.current.scrollHeight);
  }, [messagequeue]);

  return (
    <div
      className={`h-[32rem] md:h-[37rem] border-2 border-[#394566] bg-[#f0efea] flex flex-col ${
        className ? className : ''
      }`}>
      <div className='font-bold py-1 px-3 w-full uppercase bg-[#394566] text-white flex items-center justify-between'>
        <span className='font-calibri text-sm'>Chat Window</span>
        {closeAction && (
          <AiOutlineClose className='cursor-pointer' onClick={closeAction} />
        )}
      </div>
      <div className='p-4 flex items-center space-x-3 bg-white'>
        <div className='rounded-full relative p-2  bg-[#394566]' tabIndex={-1}>
          <img src='/images/tco-logo.png' className='w-8 h-8' />
          <div className='absolute w-3 h-3 rounded-full bg-[#0095ff] right-0 bottom-0'></div>
        </div>
        <span className='font-calibri text-lg'>The Creative Oracle</span>
      </div>
      <div
        className='overflow-x-hidden overflow-y-scroll py-4 scroll-smooth h-[30rem]'
        ref={windowRef}>
        {messagequeue.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
