import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import ChatContextProvider from '@contexts/Chat';
import '../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../lib/SEO';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChatContextProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChatContextProvider>
  );
}

export default MyApp;
