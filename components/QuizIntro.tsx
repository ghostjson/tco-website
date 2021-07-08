const QuizIntro = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className ? className : ''}`}>
      <div className='w-full h-56 cover'>
        <img
          src='/illustrations/resource-women.jpg'
          alt=''
          className='h-full mx-auto items-center'
        />
      </div>
      <h4 className='text-[1.7rem] font-bold text-center uppercase w-full'>
        The New Normal Economy
      </h4>
      <h6 className='font-semibold text-[.87rem] text-center'>
        Should you <span className='text-[#5bb3a6]'>increase</span> or{' '}
        <span className='text-[#e45e1b]'>cutback</span> on your marketing
        budget?
      </h6>
      <p className='text-xs text-justify'>
        Many people think it is a given to cut back on marketing dollars in
        times of economy crisis, however when majority of businesses do so,
        consumer messaging falls drastically and thus an opportunity for
        competitors to gain marketshare. So, what is the right move for you
        business and how much should you spend on marketing in this new normal?
        Take a 10-minute quiz below to find out.
      </p>
      <button className='bg-[#e45e1b] text-white p-2 uppercase mt-8 text-sm font-semibold'>
        Take a Quiz
      </button>
    </div>
  );
};

export default QuizIntro;
