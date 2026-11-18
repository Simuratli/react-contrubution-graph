import type { Day } from "../types";

export const groupByWeeks = (days: Day[], start: Date): (Day | null)[][] => {
  const weeks: (Day | null)[][] = [];
  let currentWeek: (Day | null)[] = [];

  for (let i = 0; i < start.getDay(); i++) {
    currentWeek.push(null);
  }

  for (const day of days) {
    currentWeek.push(day);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};
