import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
