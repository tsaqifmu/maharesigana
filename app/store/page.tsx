"use client"; // Menandakan bahwa ini adalah Client Component

import Link from "next/link";
import fetchBlog from "@/utils/fetchBlog";
import fetchProducts from "@/utils/fetchProducts"; // Pastikan Anda memiliki utilitas ini
import Container from "@/components/Container";
import CardsBlog from "@/components/Cards/CardsBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import React, { useEffect, useState } from "react";

interface Product {
  discount: string;
  logos: string[];
  image: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  description: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4">
      <div className="flex items-center mb-2">
        <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
        {product.logos.map((logo, index) => (
          <img key={index} src={logo} alt="Brand logo" className="ml-2" width="40" height="40" />
        ))}
      </div>
      <img src={product.image} alt="Product" className="w-full mb-2" width="100" height="100" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500 line-through">{product.originalPrice}</p>
      <p className="text-blue-600 font-bold">{product.discountedPrice}</p>
      <Link href={`/products/${product.title}`} className="bg-orange-200 hover:bg-orange-400 text-white font-bold py-1 px-3 rounded">
        View Details
      </Link>
    </div>
  );
}

function ProductDetailPage({ product }: { product: Product }) {
  return (
    <Container>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <img src={product.image} alt="Product" className="w-full mb-2" width="400" height="200" />
        <div className="flex items-center mb-2">
          <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
          {product.logos.map((logo, index) => (
            <img key={index} src={logo} alt="Brand logo" className="ml-2" width="40" height="40" />
          ))}
        </div>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500 line-through">{product.originalPrice}</p>
        <p className="text-blue-600 font-bold">{product.discountedPrice}</p>
        <Link href={`/products`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Back to Products
        </Link>
      </div>
    </Container>
  );
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [blogsData, setBlogsData] = useState<SimplifiedPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data produk dari API
        const productsResponse = await fetchProducts(
          "?populate[author][populate]=photo&populate=media&filters[category][$eq]=store"
        );
        setProducts(productsResponse);

        // Mengambil data blog dari API
        const { data } = await fetchBlog(
          "?populate[author][populate]=photo&populate=media&filters[category][$eq]=store"
        );
        const simplifiedBlogsData: SimplifiedPost[] = simplifyResponse(data);
        setBlogsData(simplifiedBlogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <BlogSection blogsData={blogsData} />
    </div>
  );
};

const BlogSection = ({ blogsData }: { blogsData: SimplifiedPost[] }) => {
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

export default App;
export { ProductDetailPage };