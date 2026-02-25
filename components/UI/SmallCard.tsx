import { motion } from "motion/react";
const SmallCard = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <motion.div
      className=" h-40 rounded-2xl shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)] "
      whileHover={{ scale: 1.05 }}
    >
      <h1 className="text-center capitalize font-bold bg-stone-800 text-stone-50 rounded-t-2xl py-2">
        {text}
      </h1>
      <div className="flex justify-center items-center  text-xl capitalize h-30">
        {value}
      </div>
    </motion.div>
  );
};

export default SmallCard;
