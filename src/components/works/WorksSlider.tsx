"use client";

import { useEffect, useState } from "react";

import { Link } from 'next-view-transitions'
import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  blog: {
    title: string,
    date: string,
    link: string,
    image: string,
  }[]
}


export default function BlogSlider(blog: Props) {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize(
          window.innerWidth
        );
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    };
  });

  let w = windowSize * 0.3000855;

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1.5}
      spaceBetween={40}
      slidesOffsetAfter={w + 18}
      pagination={{
        clickable: true,
      }}
      className="!pb-8">
      {blog.blog.map((item, index) => (
        (index < 5) ?
          <SwiperSlide key={index}>
            <Link href={item.link ?? ''} target="_blank">
              <Image
                src={item.image ?? "img/dummy.jpg"}
                alt={item.title ?? "ブログサムネイル"}
                width={1920}
                height={1080}
              />
              <time className="text-xs">{item.date ? new Date(item.date).toLocaleDateString() : ''}</time>
              <h3 className="font-bold text-sm">{item.title}</h3>
            </Link>
          </SwiperSlide>
          : ''
      ))}
    </Swiper>
  )
}