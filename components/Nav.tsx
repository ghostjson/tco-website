import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const linkVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className='flex flex-col items-start absolute top-8 left-4 md:top-8 md:left-8 z-50'>
      <img src='/images/tco-logo.png' alt='tco-logo' className='w-6 md:w-10' />
      <span className='flex gap-1 items-start justify-start'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 md:h-10 md:w-10 text-white cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={() => setShowNav(!showNav)}
          onBlur={() => setShowNav(false)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        <motion.div
          className={`bg-gray-200  rounded  p-2 px-4 flex flex-col tracking-wider space-y-2 ${
            showNav ? '' : 'hidden'
          }`}
          initial={{ y: 10, opacity: 0 }}
          animate={showNav ? { opacity: 1, y: 0 } : {}}
        >
          {NavLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <a className='capitalize cursor-pointer'>{link.name}</a>
              </Link>
            );
          })}
        </motion.div>
      </span>
    </nav>
  );
};
const NavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services - Brand',
    path: '/services/branding',
  },
  {
    name: 'Services - Marketing',
    path: '/services/marketing',
  },
  {
    name: 'Services - Web',
    path: '/services/web',
  },
  // {
  //   name: 'Contact',
  //   path: '/contact',
  // },
];

export default Nav;
