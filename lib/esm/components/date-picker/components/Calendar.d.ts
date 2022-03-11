import React from "react";
import { FocusEvent } from "react";
declare type Props = {
    year: number;
    month: number;
    day: number;
    setYear: (year: number) => void;
    setMonth: (month: number) => void;
    setDay: (day: number) => void;
    handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
    setInput: (value: string) => void;
};
declare const DateComponent: React.FC<Props>;
export default DateComponent;
