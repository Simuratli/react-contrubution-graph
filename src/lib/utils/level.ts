import type { Day } from "../types";

export const getLevel = (count: number, max: number): Day["level"] => {
  if (count === 0 || max === 0) {
    return 0;
  }

  const level = count / max;
  if (level <= 0.25) {
    return 1;
  } else if (level <= 0.5) {
    return 2;
  } else if (level <= 0.75) {
    return 3;
  } else {
    return 4;
  }
};
