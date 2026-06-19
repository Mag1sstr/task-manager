"use client";
import { useFilters } from "../../hooks/useFilters";

interface IProps {
  text: string;
  className?: string;
}
function HighlightText({ text, className }: IProps) {
  const { searchValue } = useFilters();
  const index = text
    .toLowerCase()
    .trim()
    .indexOf(searchValue.toLowerCase().trim());

  if (!searchValue || index === -1) {
    return <p className={`${className}`}>{text}</p>;
  }
  return (
    <p className={`${className}`}>
      {text.slice(0, index)}
      <span className="bg-yellow-100 font-semibold">
        {text.slice(index, index + searchValue.length)}
      </span>
      {text.slice(index + searchValue.length)}
    </p>
  );
}

export default HighlightText;
