"use client";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Cards from "@/components/Cards/Card";
import { SimplifiedPost } from "@/utils/simplifyResponse";

const SwiperCard = ({ blogsData }: { blogsData: SimplifiedPost[] }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView: any = () => {
    const width = window.innerWidth;
    if (width <= 678) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };
  useEffect(() => {
    updateSlidesPerView(); // Initial check
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {blogsData.map((data) => (
        <SwiperSlide key={data.id}>
          <Cards
            title={data.title}
            summary={data.summary}
            published={data.published}
            media={data.media}
            slug={data.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;
