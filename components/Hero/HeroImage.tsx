import Image from "next/image";

interface HeroImage {
  media: {
    url: string;
    name: string;
  };
}
export const HeroImage = ({ media }: HeroImage) => (
  <Image
    src={`http://213.210.21.45:1337${media.url}`}
    alt={media.name}
    width={1920}
    height={1080}
    className="h-[30rem] object-cover object-center pt-14 brightness-50 lg:h-screen lg:pt-[5.7rem]"
  />
);
