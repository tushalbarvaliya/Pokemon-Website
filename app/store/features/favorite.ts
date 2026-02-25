import { createSlice } from "@reduxjs/toolkit";

type common = {
  name: string;
  url: string;
};

type sate = {
  base_stat: string;
  effort: string;
  stat: common;
};

type types = {
  slot: string;
  type: common;
};

type fav = {
  id: number;
  name: string;
  image: string;
  base_experience: string;
  weight: string;
  stats: sate[];
  types: types[];
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
      console.log(action.payload);

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
