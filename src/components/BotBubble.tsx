const BotBubble = ({ message }) => {
  return (
    <div className='grid grid-cols-8 place-items-start gap-0 md:gap-2 px-2 mb-2'>
      {/* bot profile avatar */}
      <div className='col-span-1'>
        <div
          className='rounded-full p-2 h-8 w-8 bg-[#394566] justify-center'
          tabIndex={-1}>
          <img src='/images/tco-logo.png' className='w-4 h-4' />
        </div>
      </div>
      {/* chat bubble  */}
      <div className='rounded-lg px-4 py-2 rounded-tl-none bg-white text-sm col-span-7'>
        {message}
      </div>
    </div>
  );
};

export default BotBubble;
