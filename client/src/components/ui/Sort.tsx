function Sort() {
  const sortData = [
    { name: "Date", type: "date" },
    { name: "Title length", type: "length" },
  ];
  return (
    <button className="relative p-3 px-4 shadow-2xl rounded-2xl">
      Sort by:
      <div className="absolute z-50 left-0 top-full mt-2 bg-[#6BC2BB] py-2 px-px w-30 text-[14px]">
        {sortData.map((el) => (
          <div
            key={el.name}
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
