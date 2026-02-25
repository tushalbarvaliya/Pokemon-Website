"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import pokemonLogo from "@/public/pokedex.png";
import Button from "./UI/Button";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    router.push(`/?search=${search}`);
  }

  return (
    <header className="bg-stone-50 border-2">
      <nav className="flex sm:flex-row flex-col justify-between p-4 items-center sm:gap-0 gap-2">
        <Link href="/">
          <Image
            src={pokemonLogo}
            alt="pokemon logo"
            width={150}
          />
        </Link>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-4 sm:justify-center w-full sm:w-fit"
        >
          <input
            type="text"
            placeholder="Search pokemon by id or name"
            className="sm:w-sm w-full border-2 outline-0 py-2 px-4 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Link href="/favorite">
            <Button type="button">
              Favorite
            </Button>
          </Link>
        </form>
      </nav>
    </header>
  );
};

export default Header;