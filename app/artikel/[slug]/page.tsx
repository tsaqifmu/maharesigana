import React from "react";
import Image from "next/image";

import fetchBlog from "@/utils/fetchBlog";
import BlogContainer from "@/components/BlogContainer";
import { notFound } from "next/navigation";
import { simplifyResponse } from "@/utils/simplifyResponse";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface blogDetailParams {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params }: blogDetailParams) => {
  const { data } = await fetchBlog(
    `populate[author][populate]=photo&populate=media&filters[slug][$eq]=${params.slug}`,
  );
  const blogDetailData = simplifyResponse(data);

  if (!data.length) {
    notFound();
  }
  const blog = blogDetailData[0];
  return (
    <section className="flexCenter">
      <BlogContainer className="mt-24">
        <div className="mt-10 text-slate-900 xl:px-8">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <div className="my-8 flex gap-x-3">
            <Image
              src={`http://213.210.21.45:1337${blog.user.photo}`}
              width={44}
              height={44}
              alt="Author Photo"
              className="h-11 w-11 rounded-full object-cover object-center"
            />
            <div>
              <p>{blog.user.username}</p>
              <div className="text-sm text-gray-600">
                <span>5 min read</span> - <span>{blog.published}</span>
              </div>
            </div>
          </div>
          <div className="py-12">
            <Image
              src={`http://213.210.21.45:1337${blog.media.url}`}
              width={500}
              height={500}
              alt={blog.media.name}
              className="h-[30rem] w-full object-cover object-center"
            />
            <div className="mt-10 text-xl">
              <BlocksRenderer content={blog.content} />
            </div>
          </div>
        </div>
      </BlogContainer>
    </section>
  );
};

export default BlogDetail;
