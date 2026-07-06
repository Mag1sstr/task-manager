import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask, StatusType } from "../../types";
export type TSort = "date" | "length" | "dateDesc";
interface FiltersState {
  searchValue: string;
  taskStatus: StatusType[];
  sortType: TSort | null;
  dragItem: ITask | null;
}

const initialState: FiltersState = {
  searchValue: "",
  taskStatus: [],
  sortType: null,
  dragItem: null,
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
    setDragItem(state, action: PayloadAction<ITask | null>) {
      state.dragItem = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setStatusType,
  addStatusType,
  deleteStatusType,
  setSortType,
  setDragItem,
} = filterSlice.actions;

export default filterSlice.reducer;
