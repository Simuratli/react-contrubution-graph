import { MONTHS } from "../constants";
import type { Day } from "../types";

export const getMonthLabels = (weeks: (Day | null)[][]):string[] => {

    let prevMonth  = -1;
    return weeks.map((week)=>{
        const firstDay = week.find((day)=>day!==null)
        if (!firstDay) return "";
        const month = Number(firstDay.date.slice(5, 7)) - 1;
        if (month === prevMonth) return "";
        prevMonth = month;
        return MONTHS[month];
    })
}
