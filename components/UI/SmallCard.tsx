const SmallCard = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <div className="border-2 h-40 rounded-2xl">
      <h1 className="text-center capitalize font-bold bg-stone-800 text-stone-50 rounded-t-2xl py-2">
        {text}
      </h1>
      <div className="flex justify-center items-center  text-xl capitalize h-30">
        {value}
      </div>
    </div>
  );
};

export default SmallCard;
