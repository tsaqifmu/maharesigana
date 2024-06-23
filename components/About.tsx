import React from "react";
import Container from "./Container";
import Image from "next/image";
import Vision from "@/assets/icons/Vision";
import Mission from "@/assets/icons/Mission";

const AboutContent = () => (
  <div className="lg:w-1/2">
    <div className="space-y-4">
      <h4 className="text-xl font-bold text-primaryBlue">Tentang Kami</h4>
      <h1 className="text-6xl font-bold text-slate-800">
        Apa Itu MAHARESIGANA?
      </h1>
      <p className="text-lg">
        Maharesigana merupakan organisasi yang berdiri pada tahun 2016. Bergerak
        dalam penanggulangan Bencana mulai dari pra, saat hingga Pasca Bencana.
        Maharesigana banyak berkolaborasi dengan perguruan tinggi, MDMC, BPBD,
        PMI, instansi pemerintahan, rumah sakit dan NGO.
      </p>
    </div>
    <div className="mt-5 flex gap-x-5">
      <Vision className="h-16 w-16" />
      <div>
        <h3 className="text-2xl font-bold">Visi</h3>
        <p className="text-lg">
          “Menjadi Organisasi Relawan Profesional Yang Memiliki Nilai Ketuhanan
          Dan Kemanusiaan”
        </p>
      </div>
    </div>
    <div className="mt-5 flex gap-x-5">
      <Mission className="h-16 w-16" />
      <div>
        <h3 className="text-2xl font-bold">Misi</h3>
        <ol className="ml-4 list-decimal text-lg">
          <li>Mewujudkan SDM yang memiliki nilai-nilai keislaman</li>
          <li>Menjadi mitra MDMC dan lembaga kemanusiaan</li>
          <li>
            Menjadi rujukan pengembangan relawan dalam konteks kebencanaan
          </li>
          <li>
            Berpartisipasi aktif dalam berbagai forum kemanusiaan dan
            kerelawanan
          </li>
          <li>
            Berperan aktif dalam memberikan infromasi dan edukasi kebencanaan
            kepada masyarakat
          </li>
        </ol>
      </div>
    </div>
  </div>
);

const AboutImage = () => (
  <Image
    src={"/aboutImage.png"}
    alt="tetang kami"
    width={1920}
    height={1080}
    className="w-1/2 object-contain lg:w-96"
  />
);

const About = () => {
  return (
    <section className="flexCenter paddingY">
      <Container>
        <div className="flex flex-col-reverse justify-between">
          <AboutContent />
          <AboutImage />
        </div>
      </Container>
    </section>
  );
};

export default About;
