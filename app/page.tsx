"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemon } from "./fetchPokemon";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

import Card from "@/components/Card";
import Button from "@/components/UI/Button";

export default function Home() {

  
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemon"],
      queryFn: fetchPokemon,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return undefined;
        const url = new URL(lastPage.next);
        const next = url.searchParams.get("offset");
        return Number(next);
      },
    });
  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);

  return (
    <>
      <div className="sm:mx-40 mx-10 mt-8 grid lg:grid-cols-5 md:grid-cols-4  sm:grid-cols-2  gap-4">
        {data?.pages.map((page, pageIndex) =>
          page.results.map((pokemon: { name: string }, index: number) => {
            return (
              <Card
                key={`${pokemon.name}-${pageIndex}`}
                id={pageIndex * 50 + index + 1}
                name={pokemon.name}
              />
            );
          }),
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          ref={ref}
        >
          {isFetchingNextPage ? "Loading..." : "Loading..."}
        </Button>
      </div>
    </>
  );
}
