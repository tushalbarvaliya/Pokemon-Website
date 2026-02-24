import { createSlice } from "@reduxjs/toolkit";

type fav = {
  id: number;
  name: string;
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
      const r : fav={ id: action.payload.id, name: action.payload.name}
      state.favorite= [r,...state.favorite];
    },
    remove : (state,action)=>{
      state.favorite = state.favorite.filter((val)=>val.id!=action.payload.id)
    }
  },
});

export const { add ,remove} = counterSlice.actions;

export default counterSlice.reducer;
