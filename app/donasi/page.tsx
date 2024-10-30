import React from "react";
import Image from "next/image";

import fetchBlog from "@/utils/fetchBlog";

import BlogContainer from "@/components/BlogContainer";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import Container from "@/components/Container";

const page = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Donasi",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);
  const blog = blogsData[0];

  console.log(blog);
  return (
    <section className="flexCenter">
      <Container>
        <div className="mt-24 flex w-full items-center space-x-10 py-10">
          <Image
            src={`http://213.210.21.45:1337${blog.media.url}`}
            width={500}
            height={500}
            alt={blog.media.name}
            className="h-[40rem] w-1/2 object-cover object-center"
          />
          <div className="flex h-80 w-1/2 flex-col justify-between">
            <h3 className="text-xl font-bold">
              Wakaf untuk kemaslahatan umat: wujudkan impian kebaikan anda
            </h3>
            <h4>
              Bank BNI 2311117774 <br /> a.n Mahasiswa Relawan Siaga Bencana
            </h4>
            <button className="w-fit rounded-lg bg-primaryBlue p-2 text-white">
              Konfirmasi{" "}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
