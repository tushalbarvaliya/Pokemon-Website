"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchPokemonById } from "../fetchPokemon";

import Image from "next/image";
import SmallCard from "@/components/UI/SmallCard";
import Type from "@/components/UI/Type";

const page: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: [`${id}`],
    queryFn: () => fetchPokemonById(String(id)),
  });
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  const [src,Setsrc] = useState('/heart-outline.svg')
  function handelFav(){
    if(src=='/heart-outline.svg'){
      Setsrc('/heart-fill.svg')
    }else{
      Setsrc('/heart-outline.svg')
    }    
  }
  return (
    <>
      <h1 className="capitalize text-2xl font-semibold px-4">{data?.name}</h1>
      <div className="flex gap-2 px-4 my-2">
        {data?.types.map((type) => {
          return <Type key={type.type.name} name={type.type.name} />;
        })}
        <div className="flex items-center" onClick={handelFav}>
          <Image src={src} width={30} height={30} alt="heart" />
        </div>
      </div>
      <div className="flex px-4">
        <div className="w-full grid grid-cols-8  gap-3">
          <SmallCard text={"name"} value={data?.name}></SmallCard>
          <SmallCard
            text={"base experience"}
            value={data?.base_experience}
          ></SmallCard>
          <SmallCard text={"Height"} value={data?.height}></SmallCard>
          <SmallCard text={"weight"} value={`${data?.weight} Kg`}></SmallCard>
          {data?.stats.map((state) => {
            return (
              <SmallCard
                text={state.stat.name}
                value={state.base_stat}
                key={state.stat.name}
              />
            );
          })}
          <div className="col-start-6 row-start-1 row-span-2 col-span-3 flex justify-center">
            <Image
              src={url}
              width={400}
              height={400}
              alt="pokemon Image"
              className=""
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
