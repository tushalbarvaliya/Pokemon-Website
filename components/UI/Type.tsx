import React from "react";

const Type = ({ name }: { name: string }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const typeColor = {
    Bug: "#A6B91A",
    Dark: "#705746",
    Dragon: "#6F35FC",
    Electric: "#F7D02C",
    Fairy: "#D685AD",
    Fighting: "#C22E28",
    Fire: "#EE8130",
    Flying: "#A98FF3",
    Ghost: "#735797",
    Grass: "#7AC74C",
    Ground: "#E2BF65",
    Ice: "#96D9D6",
    Normal: "#A8A77A",
    Poison: "#A33EA1",
    Psychic: "#F95587",
    Rock: "#B6A136",
    Steel: "#B7B7CE",
    Water: "#6390F0",
  };
  // bg-[${typeColor[name]}]
  const classes = ` px-4 py-2 font-semibold text-stone-50 capitalize`;
  return (
    <div className={classes} style={{ backgroundColor: typeColor[name] }}>
      {name}
    </div>
  );
};

export default Type;
