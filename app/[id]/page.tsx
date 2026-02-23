"use client";

import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchPokemonById } from "../fetchPokemon";

import Image from "next/image";
import SmallCard from "@/components/UI/SmallCard";
import Type from "@/components/UI/Type";

const page: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [src, setSrc] = useState("/heart-outline.svg");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: [`${id}`],
    queryFn: () => fetchPokemonById(String(id)),
  });
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  // for fav icon change per click
  function handelFav() {
    if (src == "/heart-outline.svg") {
      setSrc("/heart-fill.svg");
    } else {
      setSrc("/heart-outline.svg");
    }
  }
  return (
    <>
      {/* Name Of Pokemon */}
      <h1 className="capitalize text-2xl font-semibold px-4">{data?.name}</h1>
      {/* Type of Pokemon */}
      <div className="flex gap-2 px-4 my-2">
        {data?.types.map(
          (type: { slot: number; type: { name: string; url: string } }) => {
            return <Type key={type.type.name} name={type.type.name} />;
          },
        )}
        {/* Fav icon */}
        <div className="flex items-center" onClick={handelFav}>
          <Image src={src} width={30} height={30} alt="heart" />
        </div>
      </div>

      {/* Pokemon Details  */}
      <div className="flex md:flex-row flex-col-reverse p-4">
        <div className="w-full grid lg:grid-cols-5 grid-cols-3  gap-3">
          <SmallCard text={"name"} value={data?.name}></SmallCard>
          <SmallCard
            text={"base experience"}
            value={data?.base_experience}
          ></SmallCard>
          {/* <SmallCard text={"Height"} value={data?.height}></SmallCard> */}
          <SmallCard text={"weight"} value={`${data?.weight} Kg`}></SmallCard>
          {data?.stats.map(
            (state: {
              base_stat: number;
              effort: number;
              stat: { name: string; url: string };
            }) => {
              return (
                <SmallCard
                  text={state.stat.name}
                  value={state.base_stat}
                  key={state.stat.name}
                />
              );
            },
          )}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-4">
          <Image
            src={url}
            width={400}
            height={400}
            alt="pokemon Image"
            className=""
          ></Image>
        </div>
      </div>

    </>
  );
};

export default page;
