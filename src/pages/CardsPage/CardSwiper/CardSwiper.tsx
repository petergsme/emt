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
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    if (renderCount.current <= 2) {
      return;
    }
    // console.log('firstmount no entra, bien');

    swiperRef.current?.swiper?.slideTo(0);
    // console.log('despues de slide');
  }, [activeFilter]);

  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        initialSlide={1}
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
