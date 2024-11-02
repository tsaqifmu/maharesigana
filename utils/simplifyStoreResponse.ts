export interface ImageFormatDetails {
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

export interface ImageFormats {
  small: ImageFormatDetails;
  thumbnail: ImageFormatDetails;
  medium?: ImageFormatDetails;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ImageItem {
  id: number;
  attributes: ImageAttributes;
}

interface ProductAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string | null;
  image: {
    data: ImageItem[];
  };
}

interface Product {
  id: number;
  attributes: ProductAttributes;
}

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

function simplifyImageResponse(images: ImageItem[]) {
  return images.map((image) => ({
    imageUrl: image?.attributes?.url,
    imageName: image?.attributes?.name,
  }));
}

export const simplifyStoreResponse = (data: Product[]) => {
  return data.map((product: Product) => ({
    id: product.id,
    title: product?.attributes?.title,
    price: formatRupiah(product?.attributes?.originalPrice),
    discountedPrice: formatRupiah(product?.attributes?.discountedPrice),
    description: product?.attributes?.description,
    imageData: simplifyImageResponse(product?.attributes?.image?.data),
  }));
};
