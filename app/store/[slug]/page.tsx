"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import fetchStore from "@/utils/fetchStore";
import { decodeUrlParams } from "@/utils/decodeParams";
import { simplifyStoreResponse } from "@/utils/simplifyStoreResponse";

import ArrowRight from "@/assets/icons/ArrowRight";

import Container from "@/components/Container";
import { ProductItem } from "../page";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Constant
const API_BASE_URL = "http://213.210.21.45:1337";
const FETCH_QUERY = "?populate=image&filters[title][$eq]=";

// Types
interface storeDetailParams {
  params: {
    slug: string;
  };
}

// Components
const PriceDisplay = ({
  originalPrice,
  discountedPrice,
}: {
  originalPrice: string;
  discountedPrice: string | null;
}) => (
  <div className="flex items-end space-x-4">
    <h3 className="text-lg text-slate-500 line-through">{originalPrice}</h3>
    <h3 className="text-4xl font-bold">{discountedPrice}</h3>
  </div>
);

const ProductDescription = ({ description }: { description: string }) => (
  <div>
    <h4 className="text-lg font-bold">Description</h4>
    <p className="text-slate-500">{description}</p>
  </div>
);

const BuyNowButton = ({ productTitle }: { productTitle: string }) => (
  <div className="w-1/2">
    <Link
      href={`/store/${productTitle}`}
      className="flex items-center justify-between rounded-full bg-primaryBlue px-5 py-1 text-white transition-all hover:bg-primaryBlue/65"
    >
      <h4 className="text-base font-semibold lg:text-lg">Beli Sekarang!</h4>
      <ArrowRight />
    </Link>
  </div>
);

const ProductDetailPage = async ({ params }: storeDetailParams) => {
  const decodedSlug = decodeUrlParams(params.slug);

  // Fetch product data
  const { data } = await fetchStore(`${FETCH_QUERY}${decodedSlug}`);

  if (!data.length) {
    notFound();
  }

  const [product]: ProductItem[] = simplifyStoreResponse(data);

  return (
    <section className="flexCenter">
      <Container>
        <div className="flex space-x-5 py-48 font-inter text-slate-800">
          {/* Product Image */}
          <div className="w-1/2">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {product.imageData.map((image) => (
                <SwiperSlide>
                  <Image
                    src={`${API_BASE_URL}${image.imageUrl}`}
                    alt={image.imageName}
                    width={800}
                    height={800}
                    className="rounded-xl object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div className="w-1/2 space-y-8">
            <h1 className="text-4xl font-semibold">{product.title}</h1>

            <PriceDisplay
              originalPrice={product.price}
              discountedPrice={product.discountedPrice}
            />

            <ProductDescription description={product.description} />

            <BuyNowButton productTitle={product.title} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailPage;
