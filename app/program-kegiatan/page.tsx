import Link from "next/link";

import fetchBlog from "@/utils/fetchBlog";
import Container from "@/components/Container";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import CardsBlog from "@/components/Cards/CardsBlog";

const page = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Program Kegiatan",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);

  return (
    <section className="flexCenter">
      <Container className="mt-10 py-10 lg:mt-24">
        {blogsData.map((data) => (
          <div key={data.id} className="max-w-3xl border-b-2 py-8">
            <CardsBlog
              slug={data.slug}
              title={data.title}
              summary={data.summary}
              author={data.user}
              media={data.media}
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default page;
