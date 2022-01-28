import { choice } from '@customTypes/Chat';
import UserChoice from './UserChoice';

const UserBubble = ({ choices }: { choices: choice[] }) => {
  return (
    <div className='grid grid-cols-8 place-items-end gap-0 md:gap-2 px-2 mb-2'>
      <div className='col-span-2'></div>
      <div className='col-span-6'>
        <span className='text-xs'>I want to:</span>
        <div className='flex flex-col space-y-2 col-span-6'>
          {choices.map((choice, index) => (
            <UserChoice choice={choice} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBubble;
