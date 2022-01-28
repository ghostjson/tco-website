import Pill from 'src/components/Pill';
import { choice } from 'src/types/Chat';
import Link from 'next/link';
import { useContext } from 'react';
import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';

const UserActions = ({
  className,
  choices,
}: {
  className?: string;
  choices?: choice[];
}) => {
  const { state, dispatch } = useContext(ChatContext);
  return (
    <div className={`text-sm my-2 ${className}`}>
      <span className='hidden xl:inline'>I want to:</span>
      <div className='text-white space-y-3'>
        {choices &&
          choices.map((choice) => {
            return (
              <>
                {choice.type === 'link' ? (
                  <Link href={choice.url} key={choice.id}>
                    <a className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base rounded-full'>
                      {choice.choice}
                    </a>
                  </Link>
                ) : (
                  <span
                    onClick={() => {
                      dispatch({
                        type: UPDATE_ACTIVE_QUESTION,
                        payload: choice.trigger_q_id,
                      });
                    }}
                    className='cursor-pointer'>
                    <Pill
                      key={choice.id}
                      className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base rounded-full'>
                      {choice.choice}
                    </Pill>
                  </span>
                )}
              </>
            );
          })}

        <a href='https://api.whatsapp.com/send?phone=6583337803'>
          <Pill className='px-8 pl-10 py-2 bg-[#A5904F] relative  hidden xl:block rounded-full'>
            <img
              src='/icons/whatsapp-legacy.svg'
              alt='whatsapp chat icon'
              className='w-10 absolute -left-1 top-1/2 transform -translate-y-1/2'
            />
            Chat
          </Pill>
        </a>
      </div>
    </div>
  );
};

export default UserActions;
