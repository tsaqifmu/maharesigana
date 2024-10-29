interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, any> | null;
  createdAt: string;
  updatedAt: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface ProductAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  originalPrice: string;
  discountedPrice: string | null;
  image: {
    data: ImageData;
  };
}

interface Product {
  id: number;
  attributes: ProductAttributes;
}

type ProductResponse = Product[];

type RupiahValue = string | null | undefined;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

function formatRupiah(angka: RupiahValue): string {
  // Handle null atau undefined
  if (angka === null || angka === undefined) {
    return "Rp0";
  }

  try {
    // Membersihkan string dari karakter non-digit
    const number = angka.replace(/\D/g, "");

    // Jika string kosong setelah dibersihkan, return Rp0
    if (!number) {
      return "Rp0";
    }

    // Mengkonversi ke number dan memformat dengan toLocaleString
    const formatted = Number(number).toLocaleString("id-ID");

    // Menambahkan 'Rp' di depan
    return `Rp${formatted}`;
  } catch {
    // Jika terjadi error dalam proses, return Rp0
    return "Rp0";
  }
}

export const simplifyStoreResponse = (data: Product[]) => {
  return data.map((product: Product) => ({
    id: product.id,
    title: product?.attributes?.title,
    price: formatRupiah(product?.attributes?.originalPrice),
    discountedPrice: formatRupiah(product?.attributes?.discountedPrice),
    imageUrl: product?.attributes?.image?.data?.attributes?.url,
    imageName: product?.attributes?.image?.data?.attributes?.name,
  }));
};
