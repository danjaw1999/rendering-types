import cn from "classnames";
import { useMemo } from "react";

export const useExtendClassNames = <T, Y>(defaultClassNames: T, newClassNames: Y): T & Y => {
  return useMemo(() => {
    return Object.assign({}, defaultClassNames, newClassNames);
  }, [defaultClassNames, newClassNames]);
};

export default cn;
