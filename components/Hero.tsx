import Image from "next/image";
import React from "react";
import Container from "./Container";

//* HERO COMPONENT SUDAH FIX
const HeroContent = () => (
  <Container className="absolute z-10 pt-14 font-inter text-white">
    <div className="flex h-full flex-col justify-center space-y-1 lg:space-y-3">
      <h3 className="text-xl font-semibold lg:text-2xl">Maharesigana</h3>
      <h1 className="w-2/3 text-3xl font-extrabold md:text-4xl lg:text-5xl">
        Psychological First Aids : Kesehatan Mental Juga Memerlukan Bantuan
      </h1>
      <p className="w-2/3 text-sm font-normal md:text-base lg:w-1/2 lg:text-lg">
        Respon psikologis dari kejadian traumatis ini merupakan reaksi normal
        dalam keadaan tidak normal. Meski demikian, hal ini harus mendapatkan
        penanganan psikologis dengan segera seperti dukungan psikologis awal
        (DPA) atau yang sering dikenal dengan……
      </p>
    </div>
  </Container>
);

const HeroImage = () => (
  <Image
    src={"/heroImage.png"}
    alt="hero image"
    width={1920}
    height={1080}
    className="h-screen object-cover object-center pt-14 brightness-50 lg:pt-[5.7rem]"
  />
);

const Hero = () => {
  return (
    <section className="flexCenter relative">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;
