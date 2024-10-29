import Image from "next/image";
import Link from "next/link";

interface CardsBlogProps {
  title: string;
  summary: string;
  slug: string;
  author: Author;
  media: Media;
}
interface Author {
  username: string;
  photo: string | null;
}
interface Media {
  url?: string;
}

const CardsBlog: React.FC<CardsBlogProps> = ({
  title,
  summary,
  author,
  media,
  slug,
}) => {
  return (
    <Link href={`/artikel/${slug}`} className="space-y-1">
      <div className="flex gap-x-3 font-inter">
        <Image
          src={`${process.env.URL_API}${author.photo}`}
          width={44}
          height={44}
          alt="writer photo"
          className="h-5 w-5 rounded-full object-cover object-center"
        />

        <p className="text-sm">{author.username}</p>
      </div>
      <div className="flex items-start justify-between">
        <div className="w-2/3">
          <h2 className="text-xl font-bold lg:text-[26px] lg:leading-[32px]">
            {title}
          </h2>
          <h3 className="line-clamp-2 text-gray-500 lg:mt-2">{summary}</h3>
        </div>
        <Image
          src={`${process.env.URL_API}${media.url}`}
          width={200}
          height={200}
          alt="writer photo"
          className="h-14 w-20 rounded-lg object-cover object-center lg:h-28 lg:w-40"
        />
      </div>
    </Link>
  );
};

export default CardsBlog;
