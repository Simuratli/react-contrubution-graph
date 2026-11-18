import { useCallback, useMemo, useState } from "react";
import { getTooltipText } from "../utils/tooltipText";
import { buildDays } from "../utils/days";
import { groupByWeeks } from "../utils/weeks";
import { getMonthLabels } from "../utils/month";
import type { Activity, Day } from "../types";

const useContribution = (data: Activity[]) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipState, setTooltipState] = useState({
    top: 0,
    left: 0,
    text: "",
  });
  const { weeks, monthLabels } = useMemo(() => {
    const end = new Date();
    const start = new Date(end);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1);

    const days = buildDays(data, start, end);
    const weeks = groupByWeeks(days, start);
    const monthLabels = getMonthLabels(weeks);

    return { weeks, monthLabels };
  }, [data]);

  const handleTooltipPosition = useCallback((cell: HTMLElement, day: Day) => {
    const { top, width, left } = cell.getBoundingClientRect();
    const text = getTooltipText(day);
    setTooltipState({
      left: left + width / 2,
      top: top,
      text: text,
    });
    setShowTooltip(true);
  }, []);

  const handleCloseTooltip = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return {
    showTooltip,
    handleCloseTooltip,
    tooltipState,
    monthLabels,
    handleTooltipPosition,
    weeks,
  };
};

export default useContribution;
