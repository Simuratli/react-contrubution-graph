import { MONTHS } from "../constants";
import type { Day } from "../types";

export const getTooltipText = (day: Day): string => {
  const [year, month, dayOfMonth] = day.date.split("-");
  const formattedDate = `${MONTHS[Number(month) - 1]} ${Number(dayOfMonth)}, ${year}`;

  switch (day.count) {
    case 0:
      return `No contributions on ${formattedDate}`;
    case 1:
      return `1 contribution on ${formattedDate}`;
    default:
      return `${day.count} contributions on ${formattedDate}`;
  }
};
