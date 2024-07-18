import Image from "next/image";

import Vision from "@/assets/icons/Vision";
import Mission from "@/assets/icons/Mission";
import Container from "@/components/Container";

const AboutContent = () => (
  <div className="lg:w-1/2">
    <div className="space-y-1 lg:space-y-4">
      <h2 className="heading2 text-primaryBlue">Tentang Kami</h2>
      <h1 className="heading1">Apa Itu MAHARESIGANA?</h1>
      <p className="paragraph text-slate-700">
        Maharesigana merupakan organisasi yang berdiri pada tahun 2016. Bergerak
        dalam penanggulangan Bencana mulai dari pra, saat hingga Pasca Bencana.
        Maharesigana banyak berkolaborasi dengan perguruan tinggi, MDMC, BPBD,
        PMI, instansi pemerintahan, rumah sakit dan NGO.
      </p>
    </div>
    <div className="mt-5 flex gap-x-5">
      <Vision className="h-10 w-10 lg:h-16 lg:w-16" />
      <div>
        <h2 className="heading2">Visi</h2>
        <p className="paragraph text-slate-700">
          “Menjadi Organisasi Relawan Profesional Yang Memiliki Nilai Ketuhanan
          Dan Kemanusiaan”
        </p>
      </div>
    </div>
    <div className="mt-5 flex gap-x-5">
      <Mission className="h-10 w-10 lg:h-16 lg:w-16" />
      <div>
        <h2 className="heading2">Misi</h2>
        <ol className="paragraph ml-4 list-decimal text-slate-700">
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
    className="object-contain sm:w-2/3 lg:w-96"
  />
);

const About = () => {
  return (
    <section className="flexCenter paddingY">
      <Container>
        <div className="flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:justify-between">
          <AboutContent />
          <AboutImage />
        </div>
      </Container>
    </section>
  );
};

export default About;
