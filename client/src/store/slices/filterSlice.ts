import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StatusType } from "../../types";
export type TSort = "date" | "length";
interface FiltersState {
  searchValue: string;
  taskStatus: StatusType[];
  sortType: TSort | null;
}

const initialState: FiltersState = {
  searchValue: "",
  taskStatus: [],
  sortType: null,
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
    setSortType(state, action: PayloadAction<TSort | null>) {
      state.sortType = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setStatusType,
  addStatusType,
  deleteStatusType,
  setSortType,
} = filterSlice.actions;

export default filterSlice.reducer;
