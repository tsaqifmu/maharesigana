"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ImageData } from "@/app/store/page";

const API_BASE_URL = "http://213.210.21.45:1337";

const ImageSwiper = ({ imageData }: { imageData: ImageData[] }) => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {imageData.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`${API_BASE_URL}${image.imageUrl}`}
            alt={image.imageName}
            width={800}
            height={800}
            className="rounded-xl object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
