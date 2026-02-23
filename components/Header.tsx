import Image from "next/image";
import React from "react";

import pokemon_Logo from "@/public/pokedex.png";
import Button from "./UI/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-50 border-2">
      <nav className="flex justify-between p-4 items-center">
        <Link href={"/"}>
          <Image src={pokemon_Logo} alt="pokemon logo" width={150}></Image>
        </Link>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search pokemon by id or name"
            className="w-sm border-2 outline-0 py-2 px-4 rounded"
          />
          <Button>Search</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
