import Pill from './Pill';

const UserActions = ({ className }: { className: string }) => {
  return (
    <div className={`text-sm ${className}`}>
      <span className='hidden xl:inline'>I want to:</span>
      <div className='flex space-x-6 text-white'>
        <Pill className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
          Engage your services
        </Pill>
        <Pill className='bg-[#A5904F] text-sm px-2 py-1 md:px-4 md:py-2 md:text-base'>
          Browse this site
        </Pill>
        <Pill className='px-8 pl-10 bg-[#A5904F] relative  hidden xl:block'>
          <img
            src='/icons/whatsapp-legacy.svg'
            alt='whatsapp chat icon'
            className='w-10 absolute -left-1 top-1/2 transform -translate-y-1/2'
          />
          Chat
        </Pill>
      </div>
    </div>
  );
};

export default UserActions;
