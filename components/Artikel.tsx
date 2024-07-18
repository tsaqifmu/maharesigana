import Container from "@/components/Container";
import SwiperCard from "@/components/Cards/SwiperCard";

import fetchBlog from "@/utils/fetchBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";

const Artikel = async () => {
  const { data } = await fetchBlog(
    "populate[author][populate]=photo&populate=media&filters[category][$eq]=Artikel",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);

  return (
    <section className="flexCenter paddingY bg-[#EFF8FF]">
      <Container>
        <h1 className="heading1 mb-16 text-center">Artikel</h1>
        <SwiperCard blogsData={blogsData} />
      </Container>
    </section>
  );
};

export default Artikel;
