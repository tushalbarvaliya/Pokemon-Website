async function fetchPokemon({ offset }: { offset: number }) {
  console.log(offset);
  
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=" + offset,
  );
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}

async function fetchPokemonById(id: number) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}
export { fetchPokemon, fetchPokemonById };
