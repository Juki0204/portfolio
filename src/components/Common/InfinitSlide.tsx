"use client";

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  elem: string,
  className?: string,
  speed?: number
  reverse?: boolean
}

export default function InfiniteSlide({ elem, className, speed, reverse }: Props) {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 0,
          reverseDirection: reverse ? reverse : false,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        loopAdditionalSlides={1}
        speed={speed ? speed : 20000}
        allowTouchMove={false}
        loop={true}
        modules={[Autoplay]}
        className={`!pb-0 [&>.swiper-wrapper]:![transition-timing-function:linear] ${className}`}
      >
        <SwiperSlide className="text-9xl font-thin text-tertiaryColor !w-auto tracking-tighter">
          <p>{elem}</p>
        </SwiperSlide>
        <SwiperSlide className="text-9xl font-thin text-tertiaryColor !w-auto tracking-tighter">
          <p>{elem}</p>
        </SwiperSlide>
        <SwiperSlide className="text-9xl font-thin text-tertiaryColor !w-auto tracking-tighter">
          <p>{elem}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}