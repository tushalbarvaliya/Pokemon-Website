import React, { memo } from "react";

type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

const TYPE_COLORS: Record<PokemonType, string> = {
  bug: "#A6B91A",
  dark: "#705746",
  dragon: "#6F35FC",
  electric: "#F7D02C",
  fairy: "#D685AD",
  fighting: "#C22E28",
  fire: "#EE8130",
  flying: "#A98FF3",
  ghost: "#735797",
  grass: "#7AC74C",
  ground: "#E2BF65",
  ice: "#96D9D6",
  normal: "#A8A77A",
  poison: "#A33EA1",
  psychic: "#F95587",
  rock: "#B6A136",
  steel: "#B7B7CE",
  water: "#6390F0",
};

interface TypeProps {
  name: PokemonType | string;
}

const Type: React.FC<TypeProps> = ({ name }) => {
  const normalized = name.toLowerCase() as PokemonType;

  const displayName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const backgroundColor = TYPE_COLORS[normalized] ?? "#666";

  return (
    <div
      className="px-4 py-2 font-semibold text-stone-50 capitalize shadow-[4px_8px_8px_rgba(0,0,0,0.38)] rounded-md"
      style={{ backgroundColor }}
      aria-label={`Pokemon type ${displayName}`}
    >
      {displayName}
    </div>
  );
};

export default memo(Type);