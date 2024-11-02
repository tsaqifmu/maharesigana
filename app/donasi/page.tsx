import React from "react";
import Image from "next/image";

import fetchBlog from "@/utils/fetchBlog";

import Container from "@/components/Container";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import Link from "next/link";
import ArrowRight from "@/assets/icons/ArrowRight";
import fetchDonation from "@/utils/fetchDonation";
import { simplifyDonationResponse } from "@/utils/simplifyDonationResponse";

// Constant
const API_BASE_URL = "http://213.210.21.45:1337";
const FETCH_QUERY = "?&populate=media";

interface ResponseData {
  id: number;
  title: string;
  description: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  imageUrl: string;
  imageName: string;
}

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
  // Fetch product data
  const { data } = await fetchDonation(`${FETCH_QUERY}`);

  const [donationData]: ResponseData[] = simplifyDonationResponse(data);

  return (
    <section className="flexCenter">
      <Container>
        <div className="flex w-full space-x-10 py-48 font-inter text-slate-800">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_API}${donationData.imageUrl}`}
            width={500}
            height={500}
            alt={donationData.imageName}
            className="h-[40rem] w-1/2 object-cover object-center"
          />
          <div className="flex w-1/2 flex-col space-y-10">
            <h3 className="text-4xl font-bold">{donationData.title}</h3>
            <p className="text-slate-600">{donationData.description}</p>
            <h4>
              <span>
                {donationData.bankName}
                <span>{donationData.accountNumber}</span>
              </span>
              <br /> a.n
              <span>{donationData.accountName}</span>
            </h4>

            <BuyNowButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
