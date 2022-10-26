// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
import React from "react";

const Slider = () => {
  let veiwNumber = 5;
 { if (window.innerWidth <= 635) {
    veiwNumber = 3;
  }}
  return (
    <>
      <Swiper
        slidesPerView={veiwNumber}
        spaceBetween={15}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
        <div className="slbg"></div>
          <img className="profile" src="./images/img1.png" alt="prof" />
          <img className="bgimg" src="./images/Areeb.jpg" alt="ok" />
          <h5>UerName</h5>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
