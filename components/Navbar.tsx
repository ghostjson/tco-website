import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showNav]);
  return (
    <>
      <div
        className={`bg-white absolute z-50 top-0 left-0 w-3/4 md:w-1/2 h-screen flex flex-col pt-32 transform transition-all ${
          showNav ? '' : '-translate-x-full'
        }`}>
        {NavLinks.map((link, key) => {
          return (
            <NavLink
              key={key}
              path={link.path}
              value={link.name}
              onClickFn={() => setShowNav(!showNav)}
            />
          );
        })}
      </div>
      {/* backdrop for the navbar  */}
      <div
        className={`bg-black opacity-50 absolute w-full h-screen transform z-40 ${
          showNav ? '' : '-translate-x-full'
        }`}
        onClick={() => setShowNav(!showNav)}></div>
      <nav className='flex flex-col items-start absolute top-8 left-4 md:top-8 md:left-8 z-50'>
        <img
          src='/images/tco-logo.png'
          alt='tco-logo'
          className={`w-6 md:w-10 ${showNav ? 'invert' : ''}`}
        />
        <span className='flex gap-1 items-start justify-start'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-6 w-6 md:h-10 md:w-10  cursor-pointer ${
              showNav ? 'text-black' : 'text-white'
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={() => setShowNav(!showNav)}
            onBlur={() => setShowNav(false)}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </span>
      </nav>
    </>
  );
};

export default Navbar;

const NavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resource',
    path: '/resource',
  },
];
