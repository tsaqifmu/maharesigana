import Container from "./Container";
import SwiperCard from "./SwiperCard";

import fetchBlog from "@/utils/fetchBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";

const Artikel = async () => {
  const { data } = await fetchBlog(
    "populate[users_permissions_user][populate]=photo&populate=media",
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
