import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StatusType } from "../../types";

interface FiltersState {
  searchValue: string;
  taskStatus: null | StatusType;
}

const initialState: FiltersState = {
  searchValue: "",
  taskStatus: null,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setStatusType(state, action: PayloadAction<null | StatusType>) {
      state.taskStatus = action.payload;
    },
  },
});

export const { setSearchValue, setStatusType } = filterSlice.actions;

export default filterSlice.reducer;
