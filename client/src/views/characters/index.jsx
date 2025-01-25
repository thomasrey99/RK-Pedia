"use client";
import CharacterCard from "@/components/card";
import { useCharactersStore } from "@/store/characters/charactersStore";
import { useEffect } from "react";

export default function Characters({ data }) {
  const { setState, characters } = useCharactersStore();

  useEffect(() => {
    setState(data);
  }, [data]);

  console.log(characters)
  return (
    <>
      {
        characters
        ?
        characters.map((character, i) => (
          <CharacterCard character={character} key={i}/>
        ))
        :
        (
          <h2 className="font-bold text-white text-5xl">There is nothing here</h2>
        )
      }
    </>
  );
}
