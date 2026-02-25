async function fetchPokemon({ pageParam = 0 }: { pageParam: number }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL+"?limit=25&offset=" + pageParam,
  );
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}

async function fetchPokemonById(id: string | undefined) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/" + id);
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}
export { fetchPokemon, fetchPokemonById };
