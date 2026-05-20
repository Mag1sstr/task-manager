import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  searchValue: string;
}

const initialState: FiltersState = {
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
