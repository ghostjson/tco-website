import { isDesktopScreen } from '@utils/checkScreen';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';

const Navbar = ({ dark }: { dark?: boolean }) => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1200) {
      document.body.style.overflow = showNav ? 'hidden' : 'auto';
    }
  }, [showNav]);

  return (
    <>
      <div
        className={`bg-white absolute z-50 top-0 left-0 w-3/4 md:w-1/2 h-screen flex flex-col pt-32 transform transition-all xl:hidden ${
          showNav ? '' : '-translate-x-full'
        }`}>
        {NavLinks.map((link, key) => {
          return (
            <NavLink
              key={key}
              link={link}
              onClickFn={() => setShowNav(!showNav)}
            />
          );
        })}
      </div>
      {/* backdrop for the navbar  */}
      <div
        className={`bg-black opacity-50 absolute w-full h-screen transform z-40 xl:bg-transparent ${
          showNav ? '' : '-translate-x-full'
        }`}
        onClick={() => setShowNav(!showNav)}></div>

      {/* desktop navbar  */}
      <div
        className={`bg-white absolute top-20 left-20 z-50 rounded hidden flex-col  ${
          dark ? 'border-2 shadow' : ''
        } ${showNav ? 'xl:flex' : ''}`}>
        {NavLinks.map((link, key) => {
          return (
            <>
              <Link href={link.path} key={key}>
                <a
                  className={`py-2 px-4 transition-all hover:bg-black hover:text-white ${
                    link.extra ? 'peer' : ''
                  }`}
                  onClick={() => setShowNav((navState) => !navState)}>
                  {link.name}
                </a>
              </Link>
              {link.extra && (
                <div className='hidden peer-hover:flex  hover:flex flex-col absolute bg-white rounded ml-[6.3rem] mt-10'>
                  {link.extra.map((extra, key) => (
                    <Link href={link.path + extra.path} key={extra.path + key}>
                      <a
                        className='py-2 px-4 transition-all hover:bg-black hover:text-white peer rounded'
                        onClick={() => setShowNav((navState) => !navState)}>
                        {extra.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </>
          );
        })}
      </div>
      {/* Navbar controller  */}
      <nav className='flex flex-col items-start absolute top-8 left-4 md:top-8 md:left-8 z-50'>
        <img
          src='/images/tco-logo.png'
          alt='tco-logo'
          className={`w-6 md:w-10 ${
            (showNav && !isDesktopScreen()) || dark ? 'invert' : ''
          }`}
        />
        <span className='flex gap-1 items-start justify-start'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-6 w-6 md:h-10 md:w-10  cursor-pointer ${
              (showNav && !isDesktopScreen()) || dark
                ? 'text-black'
                : 'text-white'
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
    extra: [
      {
        name: 'Web',
        path: '/web',
      },
      {
        name: 'Branding',
        path: '/branding',
      },
      {
        name: 'Marketing',
        path: '/marketing',
      },
    ],
  },
  {
    name: 'Resource',
    path: '/resource',
  },
];
