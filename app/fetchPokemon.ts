const delayedFetch = async (
  input: RequestInfo,
  delay:number,
  init?: RequestInit,
) => {
  const [res] = await Promise.all([
    fetch(input, init),
    new Promise((resolve) => setTimeout(resolve, delay)),
  ]);
  return res;
};

async function fetchPokemon({ pageParam = 0 }: { pageParam: number }) {
  const res = await delayedFetch(process.env.NEXT_PUBLIC_API_URL + "?limit=25&offset=" + pageParam,0);
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}

async function fetchPokemonById(id: string | undefined) {
  // return  new Error()
  const res = await delayedFetch(process.env.NEXT_PUBLIC_API_URL + "/" + id,10);
  if (!res.ok) {
    throw new Error("Data not Found");
  }
  const data = await res.json();
  return data;
}
export { fetchPokemon, fetchPokemonById };
