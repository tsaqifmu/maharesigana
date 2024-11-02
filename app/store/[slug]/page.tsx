import Link from "next/link";
import { notFound } from "next/navigation";

import fetchStore from "@/utils/fetchStore";
import { decodeUrlParams } from "@/utils/decodeParams";
import { simplifyStoreResponse } from "@/utils/simplifyStoreResponse";

import ArrowRight from "@/assets/icons/ArrowRight";

import Container from "@/components/Container";
import { ProductItem } from "../page";
import ImageSwiper from "@/components/Store/ImageSwiper";

// Constant

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
    <h3 className="text-base text-slate-500 line-through lg:text-lg">
      {originalPrice}
    </h3>
    <h3 className="text-2xl font-bold lg:text-4xl">{discountedPrice}</h3>
  </div>
);

const ProductDescription = ({ description }: { description: string }) => (
  <div>
    <h4 className="text-lg font-bold">Description</h4>
    <p className="paragraph text-slate-700">{description}</p>
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
        <div className="flex flex-col space-y-5 py-20 font-inter text-slate-800 lg:flex-row lg:space-x-5 lg:py-48">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <ImageSwiper imageData={product.imageData} />
          </div>

          {/* Product Details */}
          <div className="w-full space-y-8 lg:w-1/2">
            <h1 className="text-2xl font-semibold lg:text-5xl">
              {product.title}
            </h1>

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
