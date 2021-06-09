const Nav = () => {
  return (
    <nav className='flex flex-col items-center absolute top-8 left-4 md:top-8 md:left-8 z-50'>
      <img src='/images/tco-logo.png' alt='tco-logo' className='w-6 md:w-10' />
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 md:h-10 md:w-10 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </span>
    </nav>
  );
};

export default Nav;
