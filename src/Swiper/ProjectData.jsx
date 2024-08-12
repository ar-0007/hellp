import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const photos = [
  'projects/p2.png',
  'projects/p1.png',  
  'projects/p3.png',
  'projects/p4.png',
  'projects/p5.png',
  'projects/p6.png',
  'projects/p7.png',
  'projects/p8.png',
  'projects/p9.png',
  'projects/p10.png',
  'projects/p11.png',
  'projects/p14.png',
  'projects/p12.jpg',
  'projects/p13.png',
  
];

export default function ProjectData() {
  return (
    <section className="pt-[4rem] pb-[2rem] ">
      <div className="lg:mx-auto h-96 overflow-hidden max-w-5xl mx-[1rem] ">
        <h1 className='text-2xl text-green-600 lg:text-center pb-4 '>Projects Details</h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          loop
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          centeredSlides
          grabCursor
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((p, index) => (
            <SwiperSlide key={index}>
              <img src={p}  alt="" className='opacity-30 hover:opacity-100 z-40 ' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
