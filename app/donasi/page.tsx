import React from "react";
import Image from "next/image";

import fetchBlog from "@/utils/fetchBlog";

import Container from "@/components/Container";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import Link from "next/link";
import ArrowRight from "@/assets/icons/ArrowRight";

const BuyNowButton = () => (
  <div className="w-1/2">
    <Link
      href={`/donasi`}
      className="flex items-center justify-between rounded-full bg-primaryBlue px-5 py-1 text-white transition-all hover:bg-primaryBlue/65"
    >
      <h4 className="text-base font-semibold lg:text-lg">Konfirmasi</h4>
      <ArrowRight />
    </Link>
  </div>
);

const page = async () => {
  const { data } = await fetchBlog(
    "?populate[author][populate]=photo&populate=media&filters[category][$eq]=Donasi",
  );
  const blogsData: SimplifiedPost[] = simplifyResponse(data);
  const blog = blogsData[0];

  return (
    <section className="flexCenter">
      <Container>
        <div className="flex w-full space-x-10 py-48 font-inter text-slate-800">
          <Image
            src={`${process.env.URL_API}${blog.media.url}`}
            width={500}
            height={500}
            alt={blog.media.name}
            className="h-[40rem] w-1/2 object-cover object-center"
          />
          <div className="flex w-1/2 flex-col space-y-10">
            <h3 className="text-4xl font-bold">
              Wakaf untuk kemaslahatan umat: wujudkan impian kebaikan anda
            </h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              perspiciatis excepturi vel voluptate aliquid, itaque nisi nostrum
              eos molestiae totam ullam mollitia illo architecto saepe aut,
              praesentium veniam adipisci aspernatur.
            </p>
            <h4>
              Bank BNI 2311117774 <br /> a.n Mahasiswa Relawan Siaga Bencana
            </h4>

            <BuyNowButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
