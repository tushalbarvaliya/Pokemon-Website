"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import Image from "next/image";

import { fetchPokemonById } from "../fetchPokemon";
import SmallCard from "@/components/UI/SmallCard";
import Type from "@/components/UI/Type";

import type { RootState, AppDispatch } from "@/app/store/store";
import { add, remove } from "../store/features/favorite";
import SkeletonSmallCard from "@/components/skeleton/SkeletonSmallCard";
import ErrorHomePage from "../error";

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const favorite = useSelector((state: RootState) => state.counter.favorite);
  const numericId = Number(id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", numericId],
    queryFn: () => fetchPokemonById(String(numericId)),
    enabled: !Number.isNaN(numericId),
  });

  const isFav = favorite.some((item) => item.id === numericId);

  const heartSrc = isFav ? "/heart-fill.svg" : "/heart-outline.svg";

  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL_IMAGE}${numericId}.png`;

  function handleFav() {
    if (!data) return;

    if (isFav) {
      dispatch(remove({ id: numericId }));
    } else {
      dispatch(
        add({
          id: numericId,
          name: data.name,
          image: imageUrl,
          base_experience: data?.base_experience,
          weight: data?.weight,
          stats: data?.stats,
          types: data?.types,
        }),
      );
    }
  }

  if (isLoading) return <SkeletonSmallCard />;
  if (isError || !data?.types) {
    return <ErrorHomePage message="Pokemon Not Found" />;
  }
  return (
    <>
      {data && (
        <>
          <h1 className="capitalize text-4xl font-semibold px-4 mt-4">
            {data?.name}
          </h1>
          <div className="flex gap-2 px-4 my-2 items-center">
            {data?.types.map(
              (type: { slot: number; type: { name: string; url: string } }) => (
                <Type key={type.type.name} name={type.type.name} />
              ),
            )}

            <motion.button
              whileHover={{ scale: 1.2 }}
              initial={{ cursor: "pointer" }}
              onClick={handleFav}
              aria-label="Add to favorites"
            >
              <Image src={heartSrc} width={30} height={30} alt="favorite" />
            </motion.button>
          </div>
          <div className="flex md:flex-row flex-col-reverse p-4">
            <div className="pokemon w-full gap-8">
              <SmallCard text="name" value={data?.name} />
              <SmallCard text="base experience" value={data?.base_experience} />
              <SmallCard text="weight" value={`${data?.weight} Kg`} />

              {data?.stats.map(
                (stat: { base_stat: number; stat: { name: string } }) => (
                  <SmallCard
                    key={stat.stat.name}
                    text={stat.stat.name}
                    value={stat.base_stat}
                  />
                ),
              )}
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-start mb-4 ">
              <Image
                src={data.sprites.other.home.front_default}
                width={400}
                height={400}
                alt="Pokemon"
                priority
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
