'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name }: { id: string | number; name: string }) => {
  if(Number(id)>1025){
    return null;
  }
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  if(!url){
    return null;
  }
  return (
    <Link href={`${id}`}>
      <motion.div className="card flex flex-col justify-center  items-center   bg-stone-100 rounded-xl shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]" whileHover={{scale:1.05}} initial={{height:'250px',width:'200px'}}>
        <Image src={url} alt="pokemon" width={200} height={100}></Image>
        <h1 className="mt-2 text-xl capitalize w-full text-center">
          {id}. <span className="font-semibold">{name}</span>{" "}
        </h1>
      </motion.div>
    </Link>
  );
};



export default Card;
