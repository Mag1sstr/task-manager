import { useState } from "react";
import { useFilters } from "../../hooks/useFilters";
import { useAppDispatch } from "../../store/store";
import { setSortType, type TSort } from "../../store/slices/filterSlice";

function Sort() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { sortType } = useFilters();
  const [selectSort, setSelectSort] = useState<string | null>(null);
  const sortData: { name: string; type: TSort }[] = [
    { name: "Date", type: "date" },
    { name: "Title length", type: "length" },
    { name: "Date desc", type: "dateDesc" },
  ];

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="relative p-3 px-4 shadow-2xl rounded-2xl"
    >
      Sort by:{" "}
      <span className="text-[#6BC2BB]">
        {sortData.find((el) => el.type === sortType)?.name || ""}
      </span>
      <div
        className={`absolute z-50 left-0 top-full mt-2 bg-[#6BC2BB] py-2 px-px w-30 text-[14px] transition-all ${open ? "visible opacity-100" : "opacity-0 invisible"}`}
      >
        {sortData.map((el) => (
          <div
            key={el.name}
            onClick={() => {
              dispatch(setSortType(sortType === el.type ? null : el.type));
              //   setSelectSort((prev) => (prev === el.name ? null : el.name));
            }}
            className="bg-white text-[#6BC2BB] p-3 text-start  border-2 border-transparent hover:border-[#4e9993]  cursor-pointer transition-all"
          >
            {el.name}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Sort;
