const Nav = () => {
  return (
    <nav className='flex flex-col items-center absolute top-8 left-8'>
      <img src='assets/tco-logo.png' alt='tco-logo' className='w-10' />
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 text-white'
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
