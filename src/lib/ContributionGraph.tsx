import { COLORS, DEFAULT_FONT_FAMILY } from "./constants";
import type { ContributionGraphProps } from "./types";
import Tooltip from "./tooltip";
import { Legend } from "./Legend";
import { Grid } from "./Grid";
import useContribution from "./hooks/useContribution";

export const ContributionGraph = ({
  data,
  showMonth = true,
  colors = COLORS,
  blockSize = 11,
  blockGap = 3,
  blockRadius = 2,
  fontSize = 10,
  fontFamily = DEFAULT_FONT_FAMILY,
}: ContributionGraphProps) => {
  const {
    handleCloseTooltip,
    showTooltip,
    tooltipState,
    monthLabels,
    weeks,
    handleTooltipPosition,
  } = useContribution(data);

  return (
    <div style={{ display: "inline-block", fontFamily, fontSize }}>
      {showTooltip && (
        <Tooltip
          top={tooltipState.top}
          left={tooltipState.left}
          text={tooltipState.text}
        />
      )}
      {showMonth && (
        <div style={{ display: "flex", gap: blockGap }}>
          <div style={{ width: fontSize * 2.5, flexShrink: 0 }}></div>
          {monthLabels.map((month, index) => {
            return (
              <div
                style={{ width: blockSize, whiteSpace: "nowrap" }}
                key={index}
              >
                {month}
              </div>
            );
          })}
        </div>
      )}
      <Grid
        weeks={weeks}
        colors={colors}
        blockSize={blockSize}
        blockGap={blockGap}
        blockRadius={blockRadius}
        labelWidth={fontSize * 2.5}
        onDayEnter={handleTooltipPosition}
        onDayLeave={handleCloseTooltip}
      />
      <Legend colors={colors} />
    </div>
  );
};
