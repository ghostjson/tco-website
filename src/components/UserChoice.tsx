import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';
import { choice } from '@customTypes/Chat';
import Link from 'next/link';
import { useContext } from 'react';
import Pill from './Pill';

const UserChoice = ({ choice }: { choice: choice }) => {
  const { state, dispatch } = useContext(ChatContext);

  if (choice.type === 'link') {
    return (
      <Link href={choice.url}>
        <a className='bg-[#A5904F] text-sm md:text-xs text-white px-2 py-1 md:px-4 md:py-2 rounded-full'>
          {choice.choice}
        </a>
      </Link>
    );
  } else {
    return (
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
          className='bg-[#A5904F] text-sm md:text-xs text-white px-2 py-1 md:px-4 md:py-2 rounded-full'>
          {choice.choice}
        </Pill>
      </span>
    );
  }
};

export default UserChoice;
