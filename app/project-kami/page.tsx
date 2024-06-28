import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const HeroContent = () => (
  <Container className="absolute z-10 pt-14 font-inter text-white">
    <div className="flex h-full flex-col justify-center space-y-1 lg:space-y-3">
      <h2 className="heading2">Maharesigana</h2>
      <h1 className="heading1 w-2/3">
        Psychological First Aids : Kesehatan Mental Juga Memerlukan Bantuan
      </h1>
      <p className="paragraph w-2/3 lg:w-1/2">
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

const page = () => {
  return (
    <section className="flexCenter relative">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default page;
