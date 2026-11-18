import type { Activity, Day } from "../types";
import { getDateRange } from "./date";
import { getLevel } from "./level";

export const buildDays = (data: Activity[], start: Date, end: Date): Day[] => {
  const counts = new Map<string, number>();
  for (const item of data) {
    counts.set(item.date, item.count);
  }
  let max = 0;
  for (const count of counts.values()) {
    if (count > max) max = count;
  }
  const dateRange = getDateRange(start, end);

  
  return dateRange.map((date) => {
    const count = counts.get(date) ?? 0;
    return {
      date: date,
      count: count,
      level: getLevel(count, max),
    };
  });
};
