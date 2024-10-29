import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import ExternalLink from "@/assets/icons/ExternalLink";
import fetchBlog from "@/utils/fetchBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import { HeroImage } from "./HeroImage";
import { HeroContentNew } from "./HeroContent";

interface HeroContent {
  title: string;
  summary: string;
  slug: string;
}

const HeroContent = ({ title, summary, slug }: HeroContent) => (
  <Container className="absolute z-10 pt-14 font-inter text-white">
    <div className="flex h-full flex-col justify-center space-y-1 lg:space-y-3">
      <h2 className="heading2">Maharesigana</h2>
      <h1 className="heading1 w-2/3">{title}</h1>
      <p className="paragraph line-clamp-4 w-2/3 lg:w-1/2">{summary}</p>
      <Link
        href={`/artikel/${slug}`}
        className="paragraph flex w-fit items-center gap-x-2 rounded-full border-2 border-white px-3 py-1 font-medium text-white transition-all hover:border-primaryBlue hover:bg-primaryBlue"
      >
        <h4>Baca Selengkapnya</h4>
        <ExternalLink />
      </Link>
    </div>
  </Container>
);

const Hero = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[headline][$eq]=true",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);
  const blog = blogsData[0];
  return (
    <section className="flexCenter relative">
      <HeroContentNew title={blog.title} slug={blog.slug} />
      <HeroImage media={blog.media} />
    </section>
  );
};

export default Hero;
