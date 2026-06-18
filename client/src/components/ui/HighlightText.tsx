"use client";
import { useFilters } from "../../hooks/useFilters";

interface IProps {
  text: string;
  className?: string;
}
function HighlightText({ text, className }: IProps) {
  const { searchValue } = useFilters();
  const index = text.indexOf(searchValue);
  return (
    <p className={`${className}`}>
      {text.slice(0, index)}
      <span className="bg-yellow-100 font-medium">
        {text.slice(index, index + searchValue.length)}
      </span>
      {text.slice(index + searchValue.length)}
    </p>
  );
}

export default HighlightText;
