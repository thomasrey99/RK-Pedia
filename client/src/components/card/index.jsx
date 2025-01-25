"use client"
import { useEffect, useState } from "react";

const CharacterCard = ({ character }) => {
  const { id, name, gender, status, image, location, episode, species } =character;
  const [episodeName, setEpisodeName]=useState("");
  useEffect(() => {
    const fetchEpisode=async()=>{
        const res=await (await fetch(episode[0])).json()
        setEpisodeName(res.name)
    }
    fetchEpisode()
  }, [])

  return (
    <article className="w-[500px] h-[250px]  border bg-white/2 backdrop-blur-sm rounded-md flex text-white">
      <div className="w-2/5 h-full">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="w-3/5 h-full flex flex-col gap-1 p-3">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-[1.2rem] overflow-hidden cursor-pointer hover:text-orange-400">{name}</h2>
          <p className="flex items-center overflow-hidden">
            <span
              className={`inline-block w-[8px] h-[8px] rounded-full ${
                status === "Dead"
                  ? "bg-orange-400"
                  : status === "Alive"
                  ? "bg-green-400"
                  : "bg-gray-400"
              } mr-2`}
            ></span>
            {status} - {species}
          </p>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-[#9E9E9E] text-[0.8rem]  overflow-hidden">Last known location:</span>
          <p className="tex-[1rem] overflow-hidden">{location.name}</p>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-[#9E9E9E] text-[0.8rem]  overflow-hidden">First seen in:</span>
          <p className="tex-[1rem] overflow-hidden">{episodeName}</p>
        </div>
      </div>
    </article>
  );
};
export default CharacterCard;
