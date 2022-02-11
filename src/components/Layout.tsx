import Navbar from '@components/Navbar';
import ChatContextProvider from '@contexts/Chat';
import { useEffect } from 'react';
import useStore from 'src/store';
import Chat from './Chat';
import RequestPortfolioModel from './RequestPortfolioModel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isModelOpen } = useStore((state) => state);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isModelOpen) body.style.overflow = 'hidden';
    else body.style.overflow = 'auto';
  }, [isModelOpen]);

  return (
    <div className='relative'>
      {isModelOpen && <RequestPortfolioModel />}
      <Navbar />
      <div>{children}</div>
      {/* <Chat /> */}
    </div>
  );
};

export default Layout;
