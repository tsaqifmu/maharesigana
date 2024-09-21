import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import fetchBlog from "@/utils/fetchBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";

import BlogContainer from "@/components/BlogContainer";
import { HeroImage } from "@/components/Hero/HeroImage";
import { HeroContentNew } from "@/components/Hero/HeroContent";

const page = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Tentang Kami",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);
  const blog = blogsData[0];
  return (
    <section className="flexCenter flex-col">
      <HeroContentNew title={blog.title} />
      <HeroImage media={blog.media} />
      <BlogContainer className="mt-10 py-10 lg:mt-24">
        <div className="mt-10 font-sourceSerif text-xl leading-7 text-[#242424] lg:text-[22px] lg:leading-8">
          <BlocksRenderer content={blog.content} />
        </div>
      </BlogContainer>
    </section>
  );
};

export default page;
