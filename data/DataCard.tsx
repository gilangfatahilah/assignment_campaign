"use server";

import TvCard from "@/components/Card";
import { getData } from ".";

export const fetchData = async () => {
  const data = await getData();
  const result = await data.json();

  return result.map((item: any, index: number) => (
    <TvCard key={item.show.id} tv={item} index={index} />
  ));
};
