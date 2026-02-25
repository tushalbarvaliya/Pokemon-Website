"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import pokemonLogo from "@/public/pokedex.png";
import Button from "./UI/Button";
import { rgba } from "motion";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    console.log("API Call with:", debouncedValue);
    router.push(`/?search=${search}`);
  }, [debouncedValue]);

  return (
    <>
      <header className="bg-stone-50  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] sticky w-full z-50 top-0 ">
        <nav className="flex justify-center items-center py-2">
          {/* list of button */}
          <div className="flex mr-auto mx-4 items-center gap-8">
            {/* logo */}
            <Link href="/">
              <Image src={pokemonLogo} alt="pokemon logo" width={150} />
            </Link>
            <Link href="/favorite">
              <Button type="button">Favorite</Button>
            </Link>
            <Link href="/">
              <Button type="button">Home</Button>
            </Link>
          </div>

          {/* input search */}
          <div className=" flex items-center rounded-2xl mx-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <label htmlFor="search" className="ml-2 opacity-50">
              <Image
                src={"/search-icon.svg"}
                width={30}
                height={30}
                alt="search"
              ></Image>
            </label>
            <input
              type="text"
              placeholder="Search pokemon by id or name"
              className="sm:w-sm w-full  outline-0 py-2 px-4 rounded  "
              value={search}
              id="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
