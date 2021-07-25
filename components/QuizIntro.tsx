const QuizIntro = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col xl:flex-row items-center xl:px-10 xl:justify-center xl:gap-24 ${
        className ? className : ''
      }`}>
      <div className='w-full h-56 cover xl:w-auto xl:h-64'>
        <img
          src='/illustrations/resource-women.jpg'
          alt=''
          className='h-full mx-auto items-center'
        />
      </div>
      <div className='flex flex-col items-start xl:w-2/6'>
        <h4 className='text-[1.5rem] font-bold text-center uppercase w-full xl:text-left'>
          The New Normal Economy
        </h4>
        <h6 className='font-semibold flex justify-evenly md:justify-center xl:justify-start w-full text-[.83rem] self-center xl:self-auto xl:text-md -mt-1 text-center'>
          {'Should you '
            .split('')
            .map((letter, key) =>
              letter === ' ' ? (
                <span className='ml-1'></span>
              ) : (
                <span key={key}>{letter}</span>
              )
            )}

          {'increase '.split('').map((letter, key) =>
            letter === ' ' ? (
              <span className='ml-1'></span>
            ) : (
              <span className='text-[#7fafa8]' key={key}>
                {letter}
              </span>
            )
          )}
          {'cutback '.split('').map((letter, key) =>
            letter === ' ' ? (
              <span className='ml-1'></span>
            ) : (
              <span className='text-[#e45e1b]' key={key}>
                {letter}
              </span>
            )
          )}
          {' on your marketing budget?'
            .split('')
            .map((letter, key) =>
              letter === ' ' ? (
                <span className='ml-1'></span>
              ) : (
                <span key={key}>{letter}</span>
              )
            )}
        </h6>
        <p className='text-sm text-justify xl:text-base mt-1 leading-snug font-calibri'>
          Many people think it is a given to cut back on marketing dollars in
          times of economy crisis, however when majority of businesses do so,
          consumer messaging falls drastically and thus an opportunity for
          competitors to gain marketshare. So, what is the right move for you
          business and how much should you spend on marketing in this new
          normal? Take a 10-minute quiz below to find out.
        </p>
        <button className='bg-[#e45e1b] text-white p-2 uppercase mt-8 xl:mt-6 text-sm font-semibold self-center xl:self-auto'>
          Take a Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
