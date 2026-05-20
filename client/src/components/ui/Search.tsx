function Search() {
  return (
    <div className="flex gap-8.75 mb-13.25">
      <div className="max-w-[362px] w-full border border-[#9EA5B8] flex items-center py-3 pl-10 rounded-[37px]">
        <input
          type="text"
          className="w-full placeholder:text-[#9EA5B8] text-[18px] outline-none"
          placeholder="Search"
        />
        <div className="px-6.5">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.50005 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.50005 17C10.4864 17 12.3149 16.3176 13.7617 15.176L18.5858 20C18.9764 20.3905 19.6095 20.3905 20.0001 20C20.3906 19.6095 20.3906 18.9763 20.0001 18.5858L15.176 13.7618C16.3176 12.3149 17.0001 10.4865 17.0001 8.5C17.0001 3.80558 13.1944 0 8.50005 0ZM2 8.5C2 4.91015 4.91015 2 8.50005 2C12.0898 2 15.0001 4.91015 15.0001 8.5C15.0001 10.2952 14.2735 11.9188 13.0961 13.0962C11.9188 14.2736 10.2952 15 8.50005 15C4.91015 15 2 12.0899 2 8.5Z"
              fill="#9EA5B8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
