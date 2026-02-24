"use client";
import Image from "next/image";

import pokemon_Logo from "@/public/pokedex.png";
import Button from "./UI/Button";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");

  function handelSubmit() {
    return redirect(`${search}`);
  }
  return (
    <header className="bg-stone-50 border-2">
      <nav className="flex sm:flex-row  flex-col justify-between p-4 items-center sm:gap-0 gap-2">
        <Link href={"/"}>
          <Image src={pokemon_Logo} alt="pokemon logo" width={150}></Image>
        </Link>
        <form
          className="flex items-center gap-4 sm:justify-center w-full sm:w-fit"
          action={handelSubmit}
        >
          <input
            type="text"
            placeholder="Search pokemon by id or name"
            className="sm:w-sm w-full border-2 outline-0 py-2 px-4 rounded"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link href={"/favorite"}>
            <Button>Favorite</Button>
          </Link>
          <Link href={`${search}`}>
            <Button>Search</Button>
          </Link>
        </form>
      </nav>
    </header>
  );
};

export default Header;
