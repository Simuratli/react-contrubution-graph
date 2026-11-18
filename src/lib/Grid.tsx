import { memo, useMemo, type MouseEvent } from "react";
import { WEEKDAYS } from "./constants";
import type { Day } from "./types";
import { getTooltipText } from "./utils/tooltipText";

type GridProps = {
  weeks: (Day | null)[][];
  colors: string[];
  blockSize: number;
  blockGap: number;
  blockRadius: number;
  labelWidth: number;
  onDayEnter: (cell: HTMLElement, day: Day) => void;
  onDayLeave: () => void;
};

export const Grid = memo(function Grid({
  weeks,
  colors,
  blockSize,
  blockGap,
  blockRadius,
  labelWidth,
  onDayEnter,
  onDayLeave,
}: GridProps) {
  const dayMap = useMemo(() => {
    const map = new Map<string, Day>();
    for (const week of weeks) {
      for (const day of week) {
        if (day) map.set(day.date, day);
      }
    }
    return map;
  }, [weeks]);

  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const date = target.dataset.date;
    const day = date ? dayMap.get(date) : undefined;

    if (day) {
      onDayEnter(target, day);
    } else {
      onDayLeave();
    }
  };

  return (
    <div
      style={{ display: "flex", gap: blockGap }}
      onMouseOver={handleMouseOver}
      onMouseLeave={onDayLeave}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: blockGap,
          width: labelWidth,
          flexShrink: 0,
        }}
      >
        {WEEKDAYS.map((wd, index) => {
          return (
            <div
              style={{ height: blockSize, lineHeight: `${blockSize}px` }}
              key={wd}
            >
              {index % 2 === 0 ? "" : wd}
            </div>
          );
        })}
      </div>
      {weeks.map((week, weekIndex) => (
        <div
          key={weekIndex}
          style={{ display: "flex", flexDirection: "column", gap: blockGap }}
        >
          {week.map((day, dayIndex) =>
            day ? (
              <div
                aria-label={getTooltipText(day)}
                data-date={day.date}
                key={day.date}
                style={{
                  width: blockSize,
                  height: blockSize,
                  borderRadius: blockRadius,
                  backgroundColor: colors[day.level],
                }}
              />
            ) : (
              <div
                key={`empty-${dayIndex}`}
                style={{ width: blockSize, height: blockSize }}
              />
            ),
          )}
        </div>
      ))}
    </div>
  );
});
