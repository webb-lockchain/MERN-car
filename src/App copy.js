import './App.css';
import { BrowserRouter, 
  Navigate, Route, 
  Routes,
  createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
// import VehicleLayout from './layouts/VehicleLayout';
// import MortoringLayout from './layouts/MortoringLayout';
import Home from './pages/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    // {
    //   path: "/vehicles-for-sale/",
    //   element: <VehicleLayout/>,
    //   children:[
    //     {
    //       path: "/vehicles-for-sale/",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/vehicles-for-sale/used-cars",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/vehicles-for-sale/used-vans",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/vehicles-for-sale/electric",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/vehicles-for-sale/hampshire",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/vehicles-for-sale/huddersfield",
    //       element: <Home />,
    //     },
    //   ]
    // },
    // {
    //   path: "/sell-your-vehicle",
    //   element: <Home />
    // },
    // {
    //   path: "/mortoring-hub/",
    //   element: <MortoringLayout/>,
    //   children:[
    //     {
    //       path: "/mortoring-hub/finance",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/tmcmotors.vaninsurance.co.uk/van-insurance/about-your-van",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/mortoring-hub/warranties",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/mortoring-hub/reviews",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/mortoring-hub/videos",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/mortoring-hub/blog",
    //       element: <Home />,
    //     }
    //   ]
    // },
    // {
    //   path: "/meet-the-team",
    //   element: <Home />
    // },
    // {
    //   path: "/contact-us",
    //   element: <Home />
    // }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
