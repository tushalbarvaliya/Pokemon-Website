"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import pokemonLogo from "@/public/pokedex.png";
import Button from "./UI/Button";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    router.push(`/?search=${search}`);
  }, [debouncedValue]);

  function handelMenu() {
    setToggleMenu((prev) => !prev);
  }

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
            <Link href="/" className="homeLink">
              <Button type="button">Home</Button>
            </Link>
            <Link href="/favorite" className="favoriteLink">
              <Button type="button">Favorite</Button>
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
          <Image
            src={"/bars-solid-full.svg"}
            alt="menu"
            height={40}
            width={40}
            className="bar hidden"
            onClick={handelMenu}
          />
        </nav>
        <nav
          className="w-screen h-screen translate-px absolute z-60 right-0 top-0"
          style={{ display: toggleMenu ? "block" : "none" }}
        >
          <div className="h-full w-60 bg-white ml-auto flex flex-col gap-4">
            <div className="ml-auto mt-4" onClick={handelMenu}>
              <Image src={"/x.svg"} alt="close" width={30} height={10}></Image>
            </div>
            <Link href="/">
              <div className=" bg-amber-400 flex justify-center" onClick={handelMenu}>
                <button type="button" className="py-2 font-bold text-white">
                  Home
                </button>
              </div>
            </Link>
            <Link href="/favorite">
              <div className=" bg-amber-400 flex justify-center" onClick={handelMenu}>
                <button type="button" className="py-2 font-bold text-white">
                  Favorite
                </button>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
