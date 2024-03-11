import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import VehicleLayout from './layouts/VehicleLayout';
import MotoringLayout from './layouts/MotoringLayout';
import UsedTrucks from './pages/UsedTrucks';
import UsedCars from './pages/UsedCars';
import UsedVans from './pages/UsedVans';
// import Electric from './pages/Electric';
import Viewdetail from './pages/Viewdetail';
import ContactUs from './pages/ContactUs';
import SellYourVehicle from './pages/SellYourVehicle';
import VehiclesForSale from './pages/VehiclesForSale';
import Finance from './pages/Finance';
import Reviews from './pages/Reviews';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import Warranties from './pages/Warranties';
import Hampshire from './pages/Hampshire';
import HuddersField from './pages/HuddersField';
import MeetTeam from './pages/MeetTeam';
import ShortList from './pages/ShortList';
import BuyOnline from './pages/BuyOnline';
import Checkout from './pages/Checkout';
import ViewFinanceOption from './pages/ViewFinanceOption'
import PrivacyPolicy from './pages/PrivacyPolicy' 
import CookiesNotice from './pages/CookiesNotice' 
import FCADisclaimer from './pages/FCADisclaimer';
import Disclaimer from './pages/Disclaimer';
import SiteMap from './pages/SiteMap'; 
import DetailVideo from './pages/DetailVideo'
import DetailReview from './pages/DetailReview'
import DetailArticle from './pages/DetailArticle'
import FreeFinanceCheck from './pages/FreeFinanceCheck';
import UsedElectric from './pages/UsedElectric'
import Privacy from './pages/Privacy'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/vehicles-for-sale/",
      element: <VehicleLayout />,
      children: [
        {
          path: "/vehicles-for-sale/",
          element: <VehiclesForSale />,
        },
        {
          path: "/vehicles-for-sale/used-cars",
          element: <UsedCars />,
        },
        {
          path: "/vehicles-for-sale/used-vans",
          element: <UsedVans />,
        },
        {
          path: "/vehicles-for-sale/used-trucks",
          element: <UsedTrucks />,
        },
        {
          path: "/vehicles-for-sale/viewdetail",
          element: <Viewdetail />,
        },
        {
          path: "/vehicles-for-sale/electric",
          element: <UsedElectric />,
        },
        {
          path: "/vehicles-for-sale/hampshire",
          element: <Hampshire />,
        },
        {
          path: "/vehicles-for-sale/huddersfield",
          element: <HuddersField />,
        },
      ]
    },
    {
      path: "/sell-your-vehicle",
      element: <SellYourVehicle />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
    {
      path: "/view-finance-detail",
      element: <ViewFinanceOption />
    },
    {
      path: "/shortlist",
      element: <ShortList />
    },
    {
      path: "/buyonline",
      element: <BuyOnline />
    },
    {
      path: "/motoring-hub/",
      element: <MotoringLayout />,
      children: [
        {
          path: "/motoring-hub/finance/",
          element: <Finance />,
        },
        {
          path: "/motoring-hub/",
          element: <Home />,
        },
        {
          path: "/motoring-hub/warranties",
          element: <Warranties />,
        },
        {
          path: "/motoring-hub/reviews",
          element: <Reviews />,
        },
        {
          path: "/motoring-hub/videos",
          element: <Videos />,
        },
        {
          path: "/motoring-hub/video-detail",
          element: <DetailVideo />,
        },
        {
          path: "/motoring-hub/review-detail",
          element: <DetailReview />,
        },
        {
          path: "/motoring-hub/article-detail",
          element: <DetailArticle />,
        },
        {
          path: "/motoring-hub/blog",
          element: <Blog />,
        }
      ]
    },
    {
      path: "/meet-the-team",
      element: <MeetTeam />
    },
    {
      path: "/privacy",
      element: <Privacy />
    },
    {
      path: "/contact-us",
      element: <ContactUs />

    },
    {
      path: "/freefinancecheck",
      element: <FreeFinanceCheck />
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/cookies-notice",
      element: <CookiesNotice />
    },
    {
      path: "/fca-disclaimer",
      element: <FCADisclaimer />
    },
    {
      path: "/disclaimer",
      element: <Disclaimer />
    },
    {
      path: "/sitemap",
      element: <SiteMap />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
