import { useEffect, useState, FocusEvent } from "react";
import { daysInMonth, getWeekday, range } from "@src/utils/functions";
import Year from "./Year";
import Month from "./Month";
import Day from "./Day";

type Props = {
  year: number;
  month: number;
  day: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
  setInput: (value: string) => void;
};

const DateComponent = (props: Props) => {
  const { year, month, day, setMonth, setYear, setDay } = props;

  useEffect(() => {
    const monthString = `0${month + 1}`.split("").slice(-2).join("");
    const dayString = `0${day}`.split("").slice(-2).join("");
    const dateString = `${year}/${monthString}/${dayString}`;

    props.setInput(dateString);
  }, [props]);

  const changeMonth = (count: number) => () => {
    if (count < 0) {
      if (month > 0) setMonth(month + count);
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
      }
    }

    if (count > 0) {
      if (month < 11) setMonth(month + count);
      if (month === 11) {
        setYear(year + 1);
        setMonth(0);
      }
    }
  };

  const handleSetDay = (d: number) => {
    setDay(d);
  };

  return (
    <div className="calendar-wrapper" tabIndex={0} onBlur={props.handleBlur}>
      <Year
        year={year}
        setYear={setYear}
        goPrevious={() => setYear(year - 1)}
        goNext={() => setYear(year + 1)}
      />

      <Month
        year={year}
        month={month}
        goPrevious={changeMonth(-1)}
        goNext={changeMonth(1)}
      />

      <Day year={year} month={month} day={day} setDay={handleSetDay} />
    </div>
  );
};

export default DateComponent;
