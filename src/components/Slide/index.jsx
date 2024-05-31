import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slide = ({ height, children, isNavigation, ispagnation }) => {
  return (
    <CustomSwiper
      className="mySwiper"
      pagination={ispagnation && { type: 'progressbar' }}
      $height={height}
      navigation={!!isNavigation}
      modules={[Navigation, Autoplay, Pagination]}
    >
      {children.map((child, index) => (
        <CustomSwiperSlide key={index}>{child}</CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Slide;

const CustomSwiper = styled(Swiper)`
  width: 600px;
  height: ${(props) => `${(props.$height || 300)}px`};
`

const CustomSwiperSlide = styled(SwiperSlide)`

`