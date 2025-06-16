import { useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './cardSwiper.scss';
import { Card } from '../Cards/Card';
import { CardProps } from '@/models/Card';

// import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

interface CardSwiperProps {
  cardArray: CardProps[];
  activeFilter?: string;
}

export const CardSwiper = ({ cardArray, activeFilter }: CardSwiperProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    swiperRef.current?.swiper?.slideTo(0);
  }, [activeFilter]);

  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
        ref={swiperRef}
      >
        {cardArray?.map((card, index) => (
          <SwiperSlide key={index} className="slide-auto">
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
