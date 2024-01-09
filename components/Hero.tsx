import Image from "next/image";
import { getData } from "@/data";
import Link from "next/link";

async function Hero() {
  const fetchData = await getData();
  const data = await fetchData.json();

  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full gap-8 sm:gap-16 ">
      <div className="flex-1 flex flex-col gap-5 relative">
        <div className="flex justify-start gap-4 items-center ">
          <div className="inline-flex gap-1">
            <Image src={"/icons/star.svg"} alt="star" width={20} height={20} />
            <p className="">{data[5].show.rating.average} / 10 </p>
          </div>

          <p>|</p>
          <p>{data[5].show.language}</p>
          <p>|</p>
          <p>{data[5].show.premiered.substring(0, 4)}</p>
        </div>
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          {data[5].show.name}
        </h1>

        <p>{data[5].show.summary}</p>

        <div className="flex justify-start items-center gap-3">
          <Link
            href={data[5].show.url}
            className="bg-[#E50914] px-4 py-2 rounded w-1/3 lg:w-1/4 text-center hover:bg-[#c93d44] cursor-pointer"
          >
            More
          </Link>
          <Link
            href={data[5].show.officialSite}
            className="bg-none border px-4 py-2 rounded w-1/3 lg:w-1/4 text-center hover:bg-black hover:border-none cursor-pointer"
          >
            Visit Site
          </Link>
        </div>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center ">
        <Image
          src={data[5].show.image?.original}
          alt="Show Image"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}

export default Hero;
