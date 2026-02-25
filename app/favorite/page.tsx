"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Card from "@/components/Card";

const FavoritePage = () => {
  const favorite = useSelector((state: RootState) => state.counter.favorite);

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div className="loadPokemon   grid grid-cols-5  gap-4">
          {favorite &&
            favorite.map((obj) => {
              return <Card id={obj.id} name={obj.name} key={obj.id} />;
            })}
        </div>
      </div>
      {favorite.length == 0 && (
        <h1 className="text-center  font-bold text-4xl mt-10">
          There is No Data in Favorite. Please Add One.
        </h1>
      )}
    </>
  );
};

export default FavoritePage;
