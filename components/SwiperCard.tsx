"use client";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExternalLink from "@/assets/icons/ExternalLink";
import Image from "next/image";
import { SimplifiedPost } from "@/utils/simplifyResponse";
import Link from "next/link";

const ProgramCards = ({ published, summary, media, title, slug }: any) => {
  return (
    <Link href={`/artikel/${slug}`}>
      <div className="w-full space-y-3 rounded-md px-3 py-3 shadow-lg transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl lg:w-[300px]">
        <Image
          src={`http://213.210.21.45:1337${media.url}`}
          height={500}
          width={500}
          alt={media.name}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="w-fit rounded-full bg-gray-200 px-5 py-2">
          <h4 className="font-bold text-gray-600">{published}</h4>
        </div>
        <h2 className="text-xl font-bold text-slate-800 lg:text-2xl">
          {title}
        </h2>
        <p className="line-clamp-5 text-base text-slate-700">{summary}</p>
        <div className="flex items-center gap-x-2 text-lg font-bold text-primaryBlue">
          <h4>Baca Selengkapnya</h4>
          <ExternalLink />
        </div>
      </div>
    </Link>
  );
};

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

  console.log(blogsData);
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
          <ProgramCards
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
