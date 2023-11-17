// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './OnlineOrder.css';

// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../../../assets/home/slide1.jpg'
import slide2 from '../../../../../assets/home/slide2.jpg'
import slide3 from '../../../../../assets/home/slide3.jpg'
import slide4 from '../../../../../assets/home/slide4.jpg'
import slide5 from '../../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const OnlineOrder = () => {
    return (
        <section className='my-[140px]'>
            <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'order online'}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-[1320px]"
            >
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide1} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>Salads</p>
                </SwiperSlide>
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide2} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide3} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>Soups</p>
                </SwiperSlide>
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide4} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>desserts</p>
                </SwiperSlide>
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide5} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide className='[text-shadow:1px_1px_0px_var(--tw-shadow-color)] hover:shadow-black'>
                    <img className='min-w-[312px] min-h-[450px] max-h-[450px]' src={slide1} alt="" />
                    <p className='absolute bottom-[25px] left-[50%] translate-x-[-50%] font-cinzel text-[32px] text-white '>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default OnlineOrder;