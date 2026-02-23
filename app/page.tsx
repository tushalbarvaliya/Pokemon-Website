"use client";
import Card from "@/components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemon } from "./fetchPokemon";

export default function Home() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>{
      console.log(pages.length+50);
    },
  });

  return (
    <div className=" mx-40 mt-8 grid grid-cols-5 gap-4">
      {data?.pages[0].results?.map((data,index) => {
        return (
          <Card key={data.name} id={index+1} name={data.name} />
        );
      })}
      <button onClick={()=>fetchNextPage()}>Load</button>
    </div>
  );
}
