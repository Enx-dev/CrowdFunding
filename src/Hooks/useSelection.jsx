import { useEffect, useState, useMemo } from "react";

export const useSelection = () => {
  const [selected, setSelected] = useState(0);
  const memoSelection = useMemo(() => selected, [selected]);
  console.log(memoSelection);
  return {
    memoSelection,
    setSelected,
  };
};
