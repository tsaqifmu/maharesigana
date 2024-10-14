import Link from "next/link";
import fetchBlog from "@/utils/fetchBlog";
import Container from "@/components/Container";
import CardsBlog from "@/components/Cards/CardsBlog";
import { SimplifiedPost, simplifyResponse } from "@/utils/simplifyResponse";
import Records from "./data.json"; // Pastikan path sesuai
import React from "react";

interface Product {
  description: string;
  discount: string;
    logos: string[];
    image: string;
    title: string;
    originalPrice: string;
    discountedPrice: string;
    details: {
        description: string;
        material: string;
        features: string[];
}
}

// Ambil data dari JSON
const products: Product[] = Records as Product[]; // Mengambil data dari file JSON

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4">
      <div className="flex items-center mb-2">
        <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
        {product.logos.map((logo, index) => (
          <img key={index} src={logo} alt="Brand logo" className="ml-2" width="40" height="40" />
        ))}
      </div>
      <img src={product.image} alt="Product" className="w-full mb-2" width="200" height="100" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500 line-through">{product.originalPrice}</p>
      <p className="text-blue-600 font-bold">{product.discountedPrice}</p>
      <Link href={`/products/${product.title}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
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
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
export { ProductDetailPage };