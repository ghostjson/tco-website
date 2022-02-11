import Navbar from '@components/Navbar';
import ChatContextProvider from '@contexts/Chat';
import { useEffect, useRef } from 'react';
import useStore from 'src/store';
import Chat from './Chat';
import RequestPortfolioModel from './RequestPortfolioModel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isModelOpen } = useStore((state) => state);
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const body = document.body;
    if (isModelOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      body.style.overflow = 'hidden';
    } else body.style.overflow = 'auto';
  }, [isModelOpen]);

  return (
    <div className='relative' ref={ref}>
      {isModelOpen && <RequestPortfolioModel />}
      <Navbar />
      <div>{children}</div>
      {/* <Chat /> */}
    </div>
  );
};

export default Layout;
