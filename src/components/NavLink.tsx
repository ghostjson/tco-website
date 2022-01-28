import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai';

type NavbarLink =
  | {
      name: string;
      path: string;
      extra?: undefined;
    }
  | {
      name: string;
      path: string;
      extra: {
        name: string;
        path: string;
      }[];
    };

type NavLinkProps = {
  link: NavbarLink;
  onClickFn?: () => void;
};

const NavLink = ({ link, onClickFn }: NavLinkProps) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  return (
    <span className='flex flex-col items-start'>
      <div className='flex justify-between w-full'>
        <Link href={link.path}>
          <a
            className='capitalize cursor-pointer p-4 md:px-8 text-lg font-calibri font-semibold flex-1'
            onClick={onClickFn}>
            {link.name}
          </a>
        </Link>
        {link.extra && (
          <span className='h-full w-1/4 self-center flex justify-end items-center'>
            {showSubmenu ? (
              <AiOutlineUpCircle
                className='text-2xl mr-3'
                onClick={() => setShowSubmenu(false)}
              />
            ) : (
              <AiOutlineDownCircle
                className='text-2xl mr-3'
                onClick={() => setShowSubmenu(true)}
              />
            )}
          </span>
        )}
      </div>
      {/* submenu code  */}
      {link.extra && (
        <div
          className={`${
            showSubmenu ? 'flex' : 'hidden'
          } flex-col bg-slate-100 w-full`}>
          {link.extra.map((extra, key) => (
            <Link href={link.path + extra.path}>
              <a
                className='capitalize cursor-pointer p-4 md:px-8 text-lg font-calibri font-semibold flex-1'
                onClick={onClickFn}>
                {extra.name}
              </a>
            </Link>
          ))}
        </div>
      )}
      {/* endof submenu code  */}
    </span>
  );
};

export default NavLink;
