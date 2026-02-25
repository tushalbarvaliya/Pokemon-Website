import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonSmallCard = () => {
  return (
    <div className="p-4">
      <Skeleton count={1} width={`20%`} height={30} />
      <div className="mt-3 w-full flex gap-4  items-center">
        <Skeleton height={30} width={60} />
        <Skeleton height={30} width={60} />
        <Skeleton circle={true} width={30} height={30} />
      </div>

      <div></div>
      <div className="flex md:flex-row flex-col-reverse p-4">
        <div className="pokemon w-full gap-8">
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-start mb-4 ">
          <Skeleton height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonSmallCard;
