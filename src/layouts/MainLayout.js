import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
// import CookieBanner from '../components/CookieBanner';
// import posthog from 'posthog-js'
import LiveChat from '../components/LiveChat';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function MainLayout({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Topbar />
      <Header />
      <div className="block overflow-hidden">
        {children}
      </div>

      <Footer />
      <Bottom />
      <LiveChat/>
      {/* {posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing()
          ? null : <CookieBanner />
      } */}
    </>
  )
}

