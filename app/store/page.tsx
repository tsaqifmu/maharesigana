import React from "react";
import Link from "next/link";
import Image from "next/image";

import fetchStore from "@/utils/fetchStore";
import { simplifyStoreResponse } from "@/utils/simplifyStoreResponse";

import Container from "@/components/Container";
import ArrowRight from "@/assets/icons/ArrowRight";

export interface ProductItem {
  id: number;
  title: string;
  price: string;
  description: string;
  discountedPrice: string | null;
  imageUrl: string;
  imageName: string;
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="overflow-clip rounded-xl border font-inter transition-all hover:shadow-lg">
      <Image
        src={`${process.env.URL_API}${product.imageUrl}`}
        alt={product.imageName}
        width={500}
        height={500}
        className="h-[200px] w-full object-cover"
      />
      <div className="flex flex-col gap-y-3 px-4 py-4">
        <div className="flex space-x-2">
          <p className="text-2xl font-bold">{product?.discountedPrice}</p>
          <p className="text-gray-500 line-through">{product?.price}</p>
        </div>
        <h2 className="text-lg font-bold">{product.title}</h2>
        <div>
          <Link
            href={`/store/${product.title}`}
            className="flex items-center justify-between rounded-full bg-primaryBlue px-5 py-1 text-white transition-all hover:bg-primaryBlue/65"
          >
            <h4 className="text-base font-semibold lg:text-lg">Detail</h4>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

const App = async () => {
  const { data } = await fetchStore(
    "?populate[author][populate]=photo&populate=image",
  );

  const storeData: ProductItem[] = simplifyStoreResponse(data);

  return (
    <section className="flexCenter">
      <Container>
        <div className="py-28">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {storeData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default App;
