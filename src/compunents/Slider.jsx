import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.avif'
import img3 from '../assets/3.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img className='w-full h-[400px] object-cover' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-full h-[400px] object-cover' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='w-full h-[400px] object-cover' src={img3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider
