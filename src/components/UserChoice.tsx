import { ChatContext, UPDATE_ACTIVE_QUESTION } from '@contexts/Chat';
import { choice } from '@customTypes/Chat';
import Link from 'next/link';
import { useContext } from 'react';
import useStore from 'src/store';
import Pill from './Pill';

const UserChoice = ({ choice }: { choice: choice }) => {
  const { state, dispatch } = useContext(ChatContext);
  const toggleModel = useStore((state) => state.toggleModel);

  if (choice.type === 'link') {
    return (
      <Link href={choice.url}>
        <a className='bg-[#A5904F] text-sm md:text-xs text-white px-2 py-1 md:px-4 md:py-2 rounded-full'>
          {choice.choice}
        </a>
      </Link>
    );
  } else if (choice.type === 'trigger') {
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
  } else {
    return (
      <span onClick={() => toggleModel()} className='cursor-pointer'>
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
