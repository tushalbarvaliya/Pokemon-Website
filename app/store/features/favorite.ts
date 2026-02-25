import { createSlice } from "@reduxjs/toolkit";

type fav = {
  id: number;
  name: string;
  image: string;
  base_experience: [];
  weight: string;
  stats: [];
  types: [];
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
      const r: fav = action.payload;
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
