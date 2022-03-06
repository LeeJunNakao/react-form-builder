import React from "react";
import { FocusEvent, useState, KeyboardEvent, useEffect } from "react";
import DateComponent from "./components/Calendar";
import { InputProps } from "@src/index.d";
import "./styles.scss";

const DatePicker = (props: InputProps) => {
  const [value, setValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const [month, setMonth] = useState(Number(new Date().getMonth()));
  const [day, setDay] = useState(Number(new Date().getDate()));

  const handleContent = (event: any) => setValue(event.currentTarget.value);

  const parseString = (v: string): string => {
    const [y, m, d] = v.split(/[\/\-]/).map((i) => Number(i));

    if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      setYear(y);
      setMonth(m - 1);
      setDay(d);
      return v.split(/[\/\-]/).join("/");
    } else {
      setValue("");
      return "";
    }
  };

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
      const value = parseString(props.value);
      setValue(value);
    }
  }, []);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value);
    }
  }, [value]);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.relatedTarget) {
      setShowCalendar(false);
    }
  };

  const handlePress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      parseString(value);
    }
  };

  return (
    <div className="date-component-wrapper">
      <input
        type="text"
        className="input-component"
        value={value}
        onChange={handleContent}
        onFocus={() => setShowCalendar(true)}
        onBlur={handleBlur}
        onKeyDown={handlePress}
      />
      {showCalendar && (
        <DateComponent
          handleBlur={handleBlur}
          setInput={setValue}
          year={year}
          month={month}
          day={day}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        />
      )}
    </div>
  );
};

export default DatePicker;
