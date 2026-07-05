import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StatusType } from "../../types";
type TSort = "date" | "length" | null;
interface FiltersState {
  searchValue: string;
  taskStatus: StatusType[];
  sortType: TSort;
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
    serSortType(state, action: PayloadAction<TSort>) {
      state.sortType = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setStatusType,
  addStatusType,
  deleteStatusType,
  serSortType,
} = filterSlice.actions;

export default filterSlice.reducer;
