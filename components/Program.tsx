import React from "react";
import Container from "./Container";
import Image from "next/image";
import ExternalLink from "@/assets/icons/ExternalLink";

const Program = () => {
  return (
    <section className="flexCenter paddingY bg-[#EFF8FF]">
      <Container>
        <h1 className="heading1 text-center">Program Kegiatan</h1>
        <div className="mt-16 flex justify-center space-x-4">
          <div>
            <div className="w-full space-y-3 rounded-md px-3 py-3 shadow-lg transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl lg:w-[300px]">
              <Image
                src={"/heroImage.png"}
                height={500}
                width={500}
                alt="hero image"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="w-fit rounded-full bg-gray-200 px-5 py-2">
                <h4 className="font-bold text-gray-600">20 Juni 2024</h4>
              </div>
              <h2 className="text-xl font-bold text-slate-800 lg:text-2xl">
                Disastalk Sebagai Upaya Meluaskan Wawasan Kebencanaan
              </h2>
              <p className="line-clamp-5 text-base text-slate-700">
                Disastalk merupakan program kajian rutin yang membahas isu-isu
                kebencanaan dan peran Muhammadiyah dalam kebencanaan. Disastalk
                menjadi salah satu agenda dari Divisi Riset dan Keilmuan Periode
                2023-2025.
              </p>
              <div className="flex items-center gap-x-2 text-lg font-bold text-primaryBlue">
                <h4>Baca Selengkapnya</h4>
                <ExternalLink />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full space-y-3 rounded-md px-3 py-3 shadow-lg transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl lg:w-[300px]">
              <Image
                src={"/heroImage.png"}
                height={500}
                width={500}
                alt="hero image"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="w-fit rounded-full bg-gray-200 px-5 py-2">
                <h4 className="font-bold text-gray-600">20 Juni 2024</h4>
              </div>
              <h2 className="text-xl font-bold text-slate-800 lg:text-2xl">
                Disastalk Sebagai Upaya Meluaskan Wawasan Kebencanaan
              </h2>
              <p className="line-clamp-5 text-base text-slate-700">
                Disastalk merupakan program kajian rutin yang membahas isu-isu
                kebencanaan dan peran Muhammadiyah dalam kebencanaan. Disastalk
                menjadi salah satu agenda dari Divisi Riset dan Keilmuan Periode
                2023-2025.
              </p>
              <div className="flex items-center gap-x-2 text-lg font-bold text-primaryBlue">
                <h4>Baca Selengkapnya</h4>
                <ExternalLink />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full space-y-3 rounded-md px-3 py-3 shadow-lg transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl lg:w-[300px]">
              <Image
                src={"/heroImage.png"}
                height={500}
                width={500}
                alt="hero image"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="w-fit rounded-full bg-gray-200 px-5 py-2">
                <h4 className="font-bold text-gray-600">20 Juni 2024</h4>
              </div>
              <h2 className="text-xl font-bold text-slate-800 lg:text-2xl">
                Disastalk Sebagai Upaya Meluaskan Wawasan Kebencanaan
              </h2>
              <p className="line-clamp-5 text-base text-slate-700">
                Disastalk merupakan program kajian rutin yang membahas isu-isu
                kebencanaan dan peran Muhammadiyah dalam kebencanaan. Disastalk
                menjadi salah satu agenda dari Divisi Riset dan Keilmuan Periode
                2023-2025.
              </p>
              <div className="flex items-center gap-x-2 text-lg font-bold text-primaryBlue">
                <h4>Baca Selengkapnya</h4>
                <ExternalLink />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Program;
