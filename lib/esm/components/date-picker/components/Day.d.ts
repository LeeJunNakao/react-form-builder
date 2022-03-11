import React from "react";
declare type Props = {
    year: number;
    month: number;
    day: number;
    setDay: (day: number) => void;
};
declare const Day: React.FC<Props>;
export default Day;
