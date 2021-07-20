import Link from 'next/link';

type NavLinkProps = {
  path?: string;
  value: string;
  onClickFn?: () => void;
};

const NavLink = ({ path, value, onClickFn }: NavLinkProps) => {
  return (
    <Link href={path}>
      <a
        className='capitalize cursor-pointer p-4 md:px-8 text-lg font-calibri font-semibold'
        onClick={onClickFn}>
        {value}
      </a>
    </Link>
  );
};

export default NavLink;
