import ChatContextProvider, { ChatContext } from '@contexts/Chat';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChatContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChatContextProvider>
  );
}

export default MyApp;
