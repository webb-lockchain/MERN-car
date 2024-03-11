import {  useState } from 'react'; // new
import { useCookies } from "react-cookie";
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function CookieBanner() {
  const [cookies, setCookie] = useCookies(["dentist_user"]);
  const [showBanner, setShowBanner] = useState(true); 
  const acceptCookies = () => { 
    setShowBanner(false); // new
    setCookie("visited","1",{ path: '/' });
  };

  const declineCookies = () => {
    setShowBanner(false); // new
    setCookie("visited","1",{ path: '/' });
  };
  return (
    <div>
      {cookies.visited!=="1"&&(showBanner && ( // new
      
      <div className="fixed z-50 p-4 flex bottom-0 shadow-xl  w-full bg-white">
        <div className='mx-[50px] px-3'>
            <Typography variant='h6' color='black' className='mb-2'>
              Cookies
              </Typography>
            <Typography variant='small' color='black' className='mb-4'>
              This site uses cookies to ensure you have the best online experience. 
              By accepting you are agreeing to our recommended use of these cookies. 
              You can 
              <Link to="cookies/preferences/" className='underline'>change your cookie preferences</Link>
               or 
              <Link to="cookies/preferences/" className='underline'>learn more about the cookies we use</Link>.
            </Typography>
            <div className='flex'>
            <div className="text-center w-fit py-2 rounded-lg px-3 border-2 border-slate-300 text-white bg-blue-800 hover:bg-blue-900 cursor-pointer" onClick={acceptCookies}>
                Accept Cookies
            </div>
            <div className="text-center w-fit py-2 rounded-lg px-3 border-2 border-slate-300 text-white bg-blue-800 hover:bg-blue-900 cursor-pointer" onClick={declineCookies}>
              Decline Cookies
            </div>
            </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default CookieBanner;