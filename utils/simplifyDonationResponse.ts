// Interface for media formats
interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

// Interface for media data
interface MediaData {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      large: MediaFormat;
      small: MediaFormat;
      medium: MediaFormat;
      thumbnail: MediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any;
    createdAt: string;
    updatedAt: string;
  };
}

// Interface for item attributes
interface ItemAttributes {
  title: string;
  description: string;
  bank: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  account_number: string;
  account_name: string;
  media: {
    data: MediaData;
  };
}

// Interface for data item
interface DataItem {
  id: number;
  attributes: ItemAttributes;
}

export const simplifyDonationResponse = (data: DataItem[]) => {
  return data.map((item: DataItem) => ({
    id: item.id,
    title: item?.attributes?.title,
    description: item?.attributes?.description,
    bankName: item?.attributes?.bank,
    accountNumber: item?.attributes?.account_number,
    accountName: item?.attributes?.account_name,
    imageUrl: item?.attributes?.media?.data?.attributes?.url,
    imageName: item?.attributes?.media?.data?.attributes?.name,
  }));
};
