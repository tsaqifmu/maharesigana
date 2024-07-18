import ExternalLink from "@/assets/icons/ExternalLink";
import Image from "next/image";
import Link from "next/link";

interface Card {
  published: string;
  summary: string;
  title: string;
  media: {
    url: string;
    name: string;
  };
  slug: string;
}

const Cards = ({ published, summary, media, title, slug }: Card) => {
  return (
    <Link href={`/artikel/${slug}`}>
      <div className="w-full space-y-3 rounded-md px-3 py-3 shadow-lg transition-all hover:cursor-pointer hover:bg-white hover:shadow-2xl lg:w-[300px]">
        <Image
          src={`http://213.210.21.45:1337${media.url}`}
          height={500}
          width={500}
          alt={media.name}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="w-fit rounded-full bg-gray-200 px-5 py-2">
          <h4 className="font-bold text-gray-600">{published}</h4>
        </div>
        <h2 className="text-xl font-bold text-slate-800 lg:text-2xl">
          {title}
        </h2>
        <p className="line-clamp-5 text-base text-slate-700">{summary}</p>
        <div className="flex items-center gap-x-2 text-lg font-bold text-primaryBlue">
          <h4>Baca Selengkapnya</h4>
          <ExternalLink />
        </div>
      </div>
    </Link>
  );
};

export default Cards;
