"use server";

export const getData = async () => {
  const result = await fetch("http://api.tvmaze.com/search/shows?q=girls");

  return result;
};
