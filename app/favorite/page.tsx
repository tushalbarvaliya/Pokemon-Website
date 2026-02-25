"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Card from "@/components/Card";

const FavoritePage = () => {
  const favorite = useSelector((state: RootState) => state.counter.favorite);

  return (
    <>
      {favorite.length == 0 && (
        <h1 className="text-center capitalize mt-30 font-bold text-3xl">
          No Data Found PLease Add One Pokemon to favorite
        </h1>
      )}
      {favorite.length > 0 && (
        <>
          <div className="flex justify-center items-center p-4">
            <div className="loadPokemon   grid grid-cols-5  gap-4">
              {favorite &&
                favorite.map((obj) => {
                  return <Card id={obj.id} name={obj.name} key={obj.id} />;
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FavoritePage;
