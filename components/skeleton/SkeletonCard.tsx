import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className=" flex flex-col items-center bg-stone-100 rounded-xl p-4 shadow-md">
      {/* Image skeleton */}
      <Skeleton width={200} height={200} borderRadius={12} />

      {/* Title skeleton */}
      <div className="mt-3 w-full">
        <Skeleton height={20} />
      </div>
    
    </div>
  );
};

export default SkeletonCard;