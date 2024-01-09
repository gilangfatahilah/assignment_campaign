"use client";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import { Prop } from "@/types";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function TvCard({ tv, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="flex items-center rounded-3xl w-[300px] lg:w-[350px] h-auto justify-center  bg-[#0d1829] ">
        <div className=" mx-auto bg-[#000000] rounded-3xl shadow-xl">
          <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-none flex-col">
            <Image
              src={tv.show.image?.medium || "/icons/no-image.svg"}
              width="375"
              height="200"
              className="rounded-3xl justify-center grid h-80 object-cover"
              alt="movie.title"
            />

            <div className="px-6 py-3 flex-col z-10">
              <div className="flex justify-between">
                <p className="font-bold sm:text-2xl line-clamp-2">
                  {tv.show.name}
                </p>
                <span className="text-xl flex gap-x-1 items-center font-semibold">
                  {tv.show.rating?.average || "N/A"}
                  <Image
                    src={"/icons/star.svg"}
                    alt="star"
                    width={22}
                    height={22}
                  />
                </span>
              </div>

              <span className="text-slate-400 pt-2 font-semibold">
                {`${tv.show.premiered?.substring(0, 4) || "N/A"} - ${
                  tv.show.ended?.substring(0, 4) || "N/A"
                }  
                `}
              </span>
              <div className="h-28">
                <span className="line-clamp-4 py-2 text-sm font-light leading-relaxed ">
                  {`${tv.show.summary?.substring(0, 168) || "No Summary"}...`}
                </span>
              </div>
            </div>

            <div className="flex justify-start items-center mb-3">
              <Link
                href={tv.show.url}
                className="bg-[#E50914] mx-6 px-4 py-2 m-3 rounded w-1/4 text-center hover:bg-[#c93d44] cursor-pointer"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default TvCard;
