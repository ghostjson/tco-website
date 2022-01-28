import Navbar from '@components/Navbar';
import ChatContextProvider from '@contexts/Chat';
import Chat from './Chat';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <Navbar />
      <div>{children}</div>
      <Chat />
    </div>
  );
};

export default Layout;
