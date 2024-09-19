import fetchBlog from "@/utils/fetchBlog";
import Container from "@/components/Container";
import SwiperCard from "@/components/Cards/SwiperCard";

import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";

const Store = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Store",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);

  return (
    <section className="flexCenter paddingY bg-[#EFF8FF]">
      <Container>
        <h1 className="heading1 mb-16 text-center">Store</h1>
        <SwiperCard blogsData={blogsData} />
      </Container>
    </section>
  );
};

export default Store;
