import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StatusType } from "../../types";

interface FiltersState {
  searchValue: string;
  taskStatus: StatusType[];
}

const initialState: FiltersState = {
  searchValue: "",
  taskStatus: [],
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setStatusType(state, action: PayloadAction<StatusType[]>) {
      state.taskStatus = action.payload;
    },
    addStatusType(state, action: PayloadAction<StatusType>) {
      state.taskStatus.push(action.payload);
    },
    deleteStatusType(state, action: PayloadAction<StatusType>) {
      state.taskStatus = state.taskStatus.filter((el) => el !== action.payload);
    },
  },
});

export const {
  setSearchValue,
  setStatusType,
  addStatusType,
  deleteStatusType,
} = filterSlice.actions;

export default filterSlice.reducer;
