import fetchBlog from "@/utils/fetchBlog";
import Container from "@/components/Container";
import SwiperCard from "@/components/Cards/SwiperCard";

import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";

const Program = async () => {
  const { data } = await fetchBlog(
    "populate[author][populate]=photo&populate=media&filters[category][$eq]=Program Kegiatan",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);

  return (
    <section className="flexCenter paddingY bg-[#EFF8FF]">
      <Container>
        <h1 className="heading1 mb-16 text-center">Program Kegiatan</h1>
        <SwiperCard blogsData={blogsData} />
      </Container>
    </section>
  );
};

export default Program;
