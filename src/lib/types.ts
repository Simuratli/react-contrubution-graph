
export type Activity = {
  date: string;   // "2026-11-03" format
  count: number;
};


export type Day = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionGraphProps = {
  data: Activity[];
  colors?: string[];
  showMonth?: boolean;
  blockSize?: number;
  blockGap?: number;
  blockRadius?: number;
  fontSize?: number;
  fontFamily?: string;
};