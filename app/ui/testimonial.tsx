'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='relative'>
      <div className='h-[270px] w-full absolute'>
        <div ref={prevRef} className="absolute top-[123px] left-0 z-4" >
          <Image src={'/assets/testimonials/left-arrow.ico'} width={8} height={14} alt='Left Arrow' className='w-[16] h-[24]'/>
        </div>
      </div>
      <div className='h-[270px] w-full absolute'>
        <div ref={nextRef} className="absolute top-[123px] right-0 z-4" >
          <Image src={'/assets/testimonials/right-arrow.ico'} width={8} height={14} alt='Right Arrow' className='w-[16] h-[24]'/>
        </div>
      </div>
      <div className="max-w-[calc(100% - 48px)] px-8 m-auto">
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile screens
            },
            768: {
              slidesPerView: 2, // md and up (768px is Tailwind's md)
            },
          }}
          className='!w-full'
        >
          <SwiperSlide>
            <div className='h-[270px] bg-white pt-8 pb-4 px-2'>
              <div className='title flex gap-2 justify-center items-center'>
                <Image src={'/assets/icons/lightbox.ico'} width={38} height={44} alt='LightBox Icon'/>
                <div className='text-3xl font-bold'>Lightbox</div>
              </div>
              <div className='content p-4 text-center'>
                Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
              </div>
              <div className='author font-bold text-2xl text-center'>
                Author Name
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='h-[270px] bg-white pt-8 pb-4 px-2'>
              <div className='title flex gap-2 justify-center items-center'>
                <Image src={'/assets/icons/globalbank.ico'} width={38} height={44} alt='LightBox Icon'/>
                <div className='text-3xl font-bold'>GlobalBank</div>
              </div>
              <div className='content p-4 text-center'>
                Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.
              </div>
              <div className='author font-bold text-2xl text-center'>
                Author Name
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[270px] bg-white pt-8 pb-4 px-2'>
              <div className='title flex gap-2 justify-center items-center'>
                <Image src={'/assets/icons/lightbox.ico'} width={38} height={44} alt='LightBox Icon'/>
                <div className='text-3xl font-bold'>Lightbox</div>
              </div>
              <div className='content p-4 text-center'>
                Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
              </div>
              <div className='author font-bold text-2xl text-center'>
                Author Name
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='h-[270px] bg-white pt-8 pb-4 px-2'>
              <div className='title flex gap-2 justify-center items-center'>
                <Image src={'/assets/icons/globalbank.ico'} width={38} height={44} alt='LightBox Icon'/>
                <div className='text-3xl font-bold'>GlobalBank</div>
              </div>
              <div className='content p-4 text-center'>
                Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.
              </div>
              <div className='author font-bold text-2xl text-center'>
                Author Name
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
