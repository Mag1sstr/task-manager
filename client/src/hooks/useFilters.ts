import { useAppSelector } from "../store/store";

export const useFilters = () => useAppSelector((state) => state.filters);
