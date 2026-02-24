import { createSlice } from "@reduxjs/toolkit";

type fav = {
  id: number;
  name: string;
  image: string;
  base_experience: unknown;
  weight: unknown;
  stats: unknown;
  types: unknown;
};

interface CounterState {
  favorite: fav[];
}

const initialState: CounterState = {
  favorite: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      const r: fav = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        base_experience: action.payload.base_experience,
        weight: action.payload.weight,
        stats: action.payload.stats,
        types: action.payload.types,
      };
      state.favorite = [r, ...state.favorite];
    },
    remove: (state, action) => {
      state.favorite = state.favorite.filter(
        (val) => val.id != action.payload.id,
      );
    },
  },
});

export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
