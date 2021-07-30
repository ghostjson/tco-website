import ChatContextProvider from '@contexts/Chat';
import Navbar from 'src/components/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
