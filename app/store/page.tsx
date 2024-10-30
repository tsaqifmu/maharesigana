import Link from "next/link";
// import fetchBlog from "@/utils/fetchBlog";
// import fetchProducts from "@/utils/fetchProducts"; // Pastikan Anda memiliki utilitas ini
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
  };
}

// Ambil data dari JSON
const products: Product[] = Records as Product[]; // Mengambil data dari file JSON

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4">
      <div className="mb-2 flex items-center">
        <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-white">
          {product.discount}
        </span>
        {product.logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand logo"
            className="ml-2"
            width="40"
            height="40"
          />
        ))}
      </div>
      <img
        src={product.image}
        alt="Product"
        className="mb-2 w-full"
        width="100"
        height="100"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500 line-through">{product.originalPrice}</p>
      <p className="font-bold text-blue-600">{product.discountedPrice}</p>
      <Link
        href={`/products/${product.title}`}
        className="rounded bg-orange-200 px-3 py-1 font-bold text-white hover:bg-orange-400"
      >
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
        <img
          src={product.image}
          alt="Product"
          className="mb-2 w-full"
          width="400"
          height="200"
        />
        <div className="mb-2 flex items-center">
          <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-white">
            {product.discount}
          </span>
          {product.logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand logo"
              className="ml-2"
              width="40"
              height="40"
            />
          ))}
        </div>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-gray-500 line-through">{product.originalPrice}</p>
        <p className="font-bold text-blue-600">{product.discountedPrice}</p>
        <Link
          href={`/products`}
          className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
        >
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
    // const fetchData = async () => {
    //   try {
    //     // Mengambil data produk dari API
    //     const productsResponse = await fetchProducts(
    //       "?populate[author][populate]=photo&populate=media&filters[category][$eq]=store"
    //     );
    //     setProducts(productsResponse);
    //     // Mengambil data blog dari API
    //     const { data } = await fetchBlog(
    //       "?populate[author][populate]=photo&populate=media&filters[category][$eq]=store"
    //     );
    //     const simplifiedBlogsData: SimplifiedPost[] = simplifyResponse(data);
    //     setBlogsData(simplifiedBlogsData);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
export { ProductDetailPage };
