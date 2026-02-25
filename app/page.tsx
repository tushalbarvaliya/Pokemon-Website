"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemon } from "./fetchPokemon";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import Card from "@/components/Card";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  //call the api for data.
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

  // use for infinity scroll.
  useEffect(() => {
    if (!loadMoreRef.current) return;
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  // use to filter data based on search.
  const fetchData = data;

  return (
    <>
      <div className="flex justify-center items-center p-4 mt-4">
        <div className="loadPokemon grid grid-cols-5  gap-8">
          {search &&
            fetchData?.pages.map((page, pageIndex) =>
              page.results.map((pokemon: { name: string }, index: number) => {
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
              }),
            )}
          {!search &&
            fetchData?.pages.map((page, pageIndex) =>
              page.results.map((pokemon: { name: string }, index: number) => {
                return (
                  <div key={`${pokemon.name}-${pageIndex}`}>
                    <Card id={pageIndex * 25 + index + 1} name={pokemon.name} />
                  </div>
                );
              }),
            )}
        </div>
      </div>

      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 flex justify-center font-bold">
          Loading...
        </div>
      )}
    </>
  );
}
