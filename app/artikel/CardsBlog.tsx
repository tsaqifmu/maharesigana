import Image from "next/image";

interface CardsBlogProps {
  title: string;
  summary: string;
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
}) => {
  return (
    <div className="max-w-3xl border-b-2 py-5">
      <div className="flex gap-x-3">
        <Image
          src={`http://213.210.21.45:1337${author.photo}`}
          width={44}
          height={44}
          alt="writer photo"
          className="h-5 w-5 rounded-full object-cover object-center"
        />

        <p className="text-sm">{author.username}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-2/3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="line-clamp-2 text-gray-500">{summary}</h3>
        </div>
        <Image
          src={`http://213.210.21.45:1337${media.url}`}
          width={200}
          height={200}
          alt="writer photo"
          className="h-28 w-40 rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );
};

export default CardsBlog;
