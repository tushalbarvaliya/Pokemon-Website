"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemon } from "./fetchPokemon";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

import Card from "@/components/Card";
import Button from "@/components/UI/Button";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

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
        if (Number(next) > 1025) {
          return undefined;
        }
        return Number(next);
      },
    });
  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);
  const fetchData = data;

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div className="loadPokemon   grid grid-cols-5  gap-4">
          {fetchData?.pages.map((page, pageIndex) =>
            page.results.map((pokemon: { name: string }, index: number) => {
              if (search) {
                if (pokemon.name.includes(search)) {
                  return (
                    <div key={`${pokemon.name}-${pageIndex}`}>
                      <Card
                        id={pageIndex * 25 + index + 1}
                        name={pokemon.name}
                      />
                    </div>
                  );
                }
              } else {
                return (
                  <div key={`${pokemon.name}-${pageIndex}`}>
                    <Card id={pageIndex * 25 + index + 1} name={pokemon.name} />
                  </div>
                );
              }
            }),
          )}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            ref={ref}
          >
            {isFetchingNextPage ? "Loading..." : "Loading..."}
          </Button>
        )}
      </div>
    </>
  );
}
