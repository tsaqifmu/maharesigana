import Image from "next/image";
import React from "react";
import Container from "./Container";

const HeroContent = () => (
  <Container className="absolute bottom-1/3 z-10 h-fit w-full translate-y-2/3 space-y-3 font-inter text-white">
    <h3 className="text-2xl font-bold">Maharesigana</h3>
    <h1 className="w-2/3 text-5xl font-extrabold">
      Psychological First Aids : Kesehatan Mental Juga Memerlukan Bantuan
    </h1>
    <p className="w-1/2 text-lg font-normal">
      Respon psikologis dari kejadian traumatis ini merupakan reaksi normal
      dalam keadaan tidak normal. Meski demikian, hal ini harus mendapatkan
      penanganan psikologis dengan segera seperti dukungan psikologis awal (DPA)
      atau yang sering dikenal dengan……
    </p>
  </Container>
);

const HeroImage = () => (
  <Image
    src={"/heroImage.png"}
    alt="hero image"
    width={1920}
    height={1080}
    className="h-screen object-cover object-center pt-[95px] brightness-50"
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
