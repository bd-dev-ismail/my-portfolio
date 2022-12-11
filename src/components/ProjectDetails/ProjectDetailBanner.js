import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
const ProjectDetailBanner = ({img1, img2, img3}) => {
    return (
      <div className='w-[70%] mx-auto my-10'>
        <Swiper
          pagination={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[40%]"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          <SwiperSlide>
            <div className="container mx-auto">
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto">
              <img src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto">
              <img src={img3} alt=""/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default ProjectDetailBanner;