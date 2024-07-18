import Link from "next/link";

import fetchBlog from "@/utils/fetchBlog";
import Container from "@/components/Container";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import CardsBlog from "@/components/Cards/CardsBlog";

const page = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Berita",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);

  return (
    <section className="flexCenter">
      <Container className="mt-24 py-10">
        {blogsData.map((data) => (
          <Link
            className="cursor-pointer"
            key={data.id}
            href={`/artikel/${data.slug}`}
          >
            <CardsBlog
              title={data.title}
              summary={data.summary}
              author={data.user}
              media={data.media}
            />
          </Link>
        ))}
      </Container>
    </section>
  );
};

export default page;
