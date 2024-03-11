// import rocket from "../../assets/images/slider1.png";
// import { IconButton } from "@material-tailwind/react";
// import rover from "../assets/images/slider1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useState } from "react";
import getData from "../../data/shortlist";
import { VehicleCard1 } from "./VehicleCard1";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import React, { useState, useEffect } from 'react';
export default function ResponsiveCarSlider() {
  // const [cur, setCur] = useState(1);
  const data1 = getData();
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
            <VehicleCard1 item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
}
