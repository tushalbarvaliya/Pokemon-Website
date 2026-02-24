'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Card = ({ id, name }: { id: string | number; name: string }) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  return (
    <Link href={`${id}`}>
      <motion.div className="card flex flex-col justify-center  items-center  border-2 bg-stone-100 rounded-xl" whileHover={{scale:1.05}} initial={{height:'250px',width:'200px'}}>
        <Image src={url} alt="pokemon" width={200} height={100}></Image>
        <h1 className="mt-2 text-xl capitalize w-full text-center">
          {id}. <span className="font-semibold">{name}</span>{" "}
        </h1>
      </motion.div>
    </Link>
  );
};

export default Card;
