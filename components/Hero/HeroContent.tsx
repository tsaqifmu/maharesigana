import Link from "next/link";
import Container from "@/components/Container";
import ExternalLink from "@/assets/icons/ExternalLink";

interface HeroContentNew {
  title: string;
  slug?: string;
}

export const HeroContentNew = ({ title, slug }: HeroContentNew) => (
  <Container className="absolute bottom-[40%] left-1/2 z-10 -translate-x-1/2 translate-y-1/2 pt-14 font-inter text-white lg:bottom-[35%]">
    <div className="flex h-full flex-col items-center justify-center space-y-3">
      <h1 className="w-3/4 text-center">
        <span className="bg-[#00205C] bg-opacity-65 px-4 py-1 text-center text-2xl font-bold leading-7 lg:text-5xl lg:leading-[80px]">
          {title}
        </span>
      </h1>
      {slug && (
        <Link
          href={`/artikel/${slug}`}
          className="paragraph flex w-fit items-center gap-x-2 bg-[#00205C] bg-opacity-65 px-3 py-1 font-medium text-white transition-all hover:bg-primaryBlue"
        >
          <h4>Baca Selengkapnya</h4>
          <ExternalLink />
        </Link>
      )}
    </div>
  </Container>
);
