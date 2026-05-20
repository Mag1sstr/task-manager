import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debValue;
};
