import Pill from 'src/components/Pill';
import { choice } from 'src/types/Chat';
import Link from 'next/link';

const UserActions = ({
  className,
  choices,
}: {
  className: string;
  choices?: choice[];
}) => {
  return (
    <div className={`text-sm ${className}`}>
      <span className='hidden xl:inline'>I want to:</span>
      <div className='flex space-x-6 text-white'>
        {choices &&
          choices.map((choice) => {
            return (
              <>
                {choice.type === 'link' ? (
                  <Link href={choice.url} key={choice.id}>
                    <a className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
                      {choice.choice}
                    </a>
                  </Link>
                ) : (
                  <Pill
                    key={choice.id}
                    className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
                    {choice.choice}
                  </Pill>
                )}
              </>
            );
          })}
        <Pill className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
          Engage your services
        </Pill>
        <Pill className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
          Browse this site
        </Pill>
        <a href='https://api.whatsapp.com/send?phone=6583337803'>
          <Pill className='px-8 pl-10 py-2 bg-[#A5904F] relative  hidden xl:block'>
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
