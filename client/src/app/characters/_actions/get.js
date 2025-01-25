"use server";

import { fetchData } from "@/utils/fetchData";

export const getCharacters = async (queries) => {
  const res = await fetchData("https://rickandmortyapi.com/api/character", queries);
  return res;
};
