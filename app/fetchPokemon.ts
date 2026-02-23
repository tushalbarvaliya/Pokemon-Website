async function fetchPokemon({ pageParam = 0 }: { pageParam: number }) {
  console.log(pageParam);

  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=" + pageParam,
  );
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}

async function fetchPokemonById(id: string | undefined) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}
export { fetchPokemon, fetchPokemonById };
