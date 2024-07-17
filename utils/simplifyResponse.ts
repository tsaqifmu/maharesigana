// Define interfaces for the data structure

interface Post {
  id: number;
  attributes: PostAttributes;
}

interface PostAttributes {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  content: any;
  media: {
    data: Media;
  };
  users_permissions_user: User;
}

interface Media {
  id: number;
  attributes: MediaAttributes;
}
interface User {
  data: {
    attributes: UserAttributes;
  };
}
interface UserAttributes {
  username: string;
  photo?: {
    data?: {
      attributes?: {
        formats?: {
          thumbnail?: {
            url: string;
          };
        };
      };
    };
  };
}

interface MediaAttributes {
  name: string;
  formats?: {
    large?: {
      url: string;
    };
  };
}

// interface simplified

export interface SimplifiedPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  published: string;
  content: any;
  media: SimplifiedMedia;
  user: SimplifiedUser;
}

interface SimplifiedMedia {
  id: number;
  name: string;
  url?: string;
}

interface SimplifiedUser {
  username: string;
  photo: string | null;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

// Refactor the function to use the defined interfaces
export const simplifyResponse = (data: Post[]): SimplifiedPost[] => {
  return data.map((post: Post) => ({
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    summary: post.attributes.summary,
    published: formatDate(post.attributes.publishedAt),
    content: post.attributes.content,
    media: {
      id: post.attributes.media.data.id,
      name: post.attributes.media.data.attributes.name,
      url: post.attributes.media.data.attributes.formats?.large?.url,
    },
    user: {
      username: post.attributes.users_permissions_user.data.attributes.username,
      photo:
        post.attributes.users_permissions_user.data.attributes.photo?.data
          ?.attributes?.formats?.thumbnail?.url || null,
    },
  }));
};
