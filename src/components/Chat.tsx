import { FC, useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import ChatWindow from './ChatWindow';
import Pill from './Pill';

const Chat: FC = () => {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);

  const toggleChatWindow = () => {
    setWindowOpen((windowOpen) => !windowOpen);
  };

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {windowOpen ? (
        <ChatWindow closeAction={toggleChatWindow} />
      ) : (
        <button
          className='rounded-full flex items-center space-x-2 p-4 px-6 bg-[#394566] text-white'
          onClick={toggleChatWindow}>
          <AiOutlineMessage className='text-2xl' />
          <span className='font-bold'>Chat</span>
        </button>
      )}
      {/* <a href='https://api.whatsapp.com/send?phone=6583337803'>
        <Pill className='px-8 pl-10 py-2 bg-[#A5904F] relative hidden xl:block rounded-full'>
          <img
            src='/icons/whatsapp-legacy.svg'
            alt='whatsapp chat icon'
            className='w-10 absolute -left-1 top-1/2 transform -translate-y-1/2'
          />
          Chat
        </Pill>
      </a> */}
    </div>
  );
};

export default Chat;
