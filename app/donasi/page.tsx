import React from "react";
import Link from "next/link";
import Image from "next/image";

import fetchDonation from "@/utils/fetchDonation";
import { simplifyDonationResponse } from "@/utils/simplifyDonationResponse";

import ArrowRight from "@/assets/icons/ArrowRight";

import Container from "@/components/Container";

// Constant
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

interface BankAccountInfoProps {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

const ConfirmButton = () => (
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

const DonationImage = ({
  imageUrl,
  imageName,
}: {
  imageUrl: string;
  imageName: string;
}) => (
  <Image
    src={`${process.env.NEXT_PUBLIC_URL_API}${imageUrl}`}
    width={500}
    height={500}
    alt={imageName}
    className="h-[40rem] w-full object-cover object-center lg:w-1/2"
  />
);

const BankAccountInfo: React.FC<BankAccountInfoProps> = ({
  bankName,
  accountNumber,
  accountName,
}) => (
  <h4>
    <span>
      {bankName}
      <span className="ml-2">{accountNumber}</span>
    </span>
    <br />
    <span className="mr-2">a.n</span>
    <span>{accountName}</span>
  </h4>
);

const DonationPage = async () => {
  // Fetch product data
  const { data } = await fetchDonation(`${FETCH_QUERY}`);

  const [donationData]: ResponseData[] = simplifyDonationResponse(data);

  return (
    <section className="flexCenter">
      <Container>
        <div className="flex w-full flex-col space-y-5 py-20 font-inter text-slate-800 lg:flex-row lg:space-x-10 lg:py-48">
          {/* Donation Image */}
          <DonationImage
            imageUrl={donationData.imageUrl}
            imageName={donationData.imageName}
          />

          {/* Donation Description */}
          <div className="flex w-full flex-col space-y-5 lg:w-1/2 lg:space-y-10">
            <h3 className="heading1">{donationData.title}</h3>
            <p className="paragraph text-slate-700">
              {donationData.description}
            </p>

            <BankAccountInfo
              bankName={donationData.bankName}
              accountNumber={donationData.accountNumber}
              accountName={donationData.accountName}
            />

            <ConfirmButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DonationPage;
