import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants";

import Container from "@/components/Container";
import WaIcon from "@/assets/icons/socialMediaIcon/WaIcon";
import MapsIcon from "@/assets/icons/socialMediaIcon/MapsIcon";
import YoutubeIcon from "@/assets/icons/socialMediaIcon/YoutubeIcon";
import InstagramIcon from "@/assets/icons/socialMediaIcon/InstagramIcon";

export const socialMedia = [
  {
    id: "youtube",
    icon: <YoutubeIcon className="text-primaryBlue" />,
    link: "https://www.youtube.com/@Centrabiotech.official",
  },
  {
    id: "map",
    icon: <MapsIcon className="text-primaryBlue" />,
    link: "/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon className="text-primaryBlue" />,
    link: "https://www.instagram.com/doktertaniofficial/",
  },
  {
    id: "walist",
    icon: <WaIcon className="text-primaryBlue" />,
    link: "https://api.whatsapp.com/send?phone=6283134954396&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi",
  },
];

const QuickAccessNav = () => {
  return (
    <div className="flex gap-x-8">
      <nav className="flex flex-col gap-5 md:flex-row md:justify-end xl:gap-14">
        <ul className="flex flex-col gap-4 whitespace-nowrap sm:text-end">
          <h3 className="text-[16px] text-sm font-semibold text-white md:text-lg">
            Akses Cepat
          </h3>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="hover:text-orangeDokTan cursor-pointer text-[16px] text-sm font-normal text-white transition-all hover:font-semibold md:text-base"
            >
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.909400239834!2d112.6021305!3d-7.923521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883d47b3b175b%3A0xeb9b80f9ca8270b8!2sBasecamp%20Maharesigana%20UMM!5e0!3m2!1sid!2sid!4v1719154343957!5m2!1sid!2sid"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-3/5 md:w-2/3"
      ></iframe>
    </div>
  );
};

const FooterCopyright = () => {
  return (
    <div className="mt-5 text-center text-xs font-medium text-white md:text-base xl:text-right">
      ©{new Date().getFullYear()}{" "}
      <Link
        href={"https://www.doktertani.co.id/"}
        target="_blank"
        className="hover:text-orangeDokTan transition-all"
      >
        maharesigana.org
      </Link>
      <br />
      <span className="italic underline decoration-blue-600 decoration-2 selection:bg-blue-600">
        Semua Hak Cipta Dilindungi.
      </span>
    </div>
  );
};

const FooterLogo = () => {
  return (
    <div className="w-72 space-y-8 lg:w-80 xl:w-96">
      <div>
        <Image
          src={"/logo maharesigana footer.png"}
          width={300}
          height={300}
          alt="logo maharesigana"
          className="w-2/3"
        />
        <p className={`mt-3 text-sm text-slate-300 lg:text-base`}>
          Maharesigana, berdiri pada 2016, bergerak dalam penanggulangan bencana
          mulai dari pra hingga pasca bencana dan berkolaborasi dengan berbagai
          pihak.
        </p>
      </div>
      <div className="w-3/4">
        <div className="flex items-center">
          <p className="text-nowrap font-semibold text-white">Ikuti Kami di</p>
          <div className="ml-3 h-0 w-1/3 rounded-full border-2" />
        </div>
        <div className="mt-3 flex gap-2 lg:justify-between lg:gap-0">
          {socialMedia.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-orangeDokTan rounded-full bg-white p-2 transition-all lg:p-3"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="flexCenter paddingY bg-primaryBlue">
      <Container>
        <div className="flex flex-col gap-8 border-b-4 border-white pb-5 sm:flex-row sm:items-center sm:justify-between">
          <FooterLogo />
          <QuickAccessNav />
        </div>
        <FooterCopyright />
      </Container>
    </section>
  );
};

export default Footer;
