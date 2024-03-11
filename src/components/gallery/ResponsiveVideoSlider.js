// import rocket from "../../assets/images/slider1.png";
// import { IconButton } from "@material-tailwind/react";
// import rover from "../assets/images/slider1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useState } from "react";
// import getData from "../../data/shortlist";
import { VehicleArticle } from "./VehicleArticle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import React, { useState, useEffect } from 'react';
export default function ResponsiveVideoSlider() {
  // const [cur, setCur] = useState(1);
  const data1 = [
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/02c021b457364663b98f4b3eb8fd5b16.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/fbe77c6952594d87ac2204a116c7b231.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/4bc948d67286437dac6ae7c742d6a3df.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/dcdf0bfcb5e44606a69dd823254d47dd.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/02c021b457364663b98f4b3eb8fd5b16.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/02c021b457364663b98f4b3eb8fd5b16.jpg"
    },
    {
      title:"A new TMC Arrival-audi S3 Quattro Black Edition",
      detail:"Here's a stunning new arrival to our Oakhanger showroom",
      image:"https://m-qa.atcdn.co.uk/a/media/{resize}/a1f2f68bde1247bb955d981d8a67d08d.jpg"
    },
  ]
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const swiper = useSwiper()
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={(screenWidth>1300) ? 4 : (screenWidth>1000?3:(screenWidth>700?2:1) ) }
        spaceBetween={30}
        pagination={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        autoplay={true}
      >
        {data1.map((item)=>(
          <SwiperSlide>
            <VehicleArticle item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}
